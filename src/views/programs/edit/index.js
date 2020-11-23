import React from 'react'
import { history } from '../../../history'
import {
  AlertError, AlertLoading, AlertSuccess, Error,
} from '../../../components/custom'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { usePostResources, useFetchResources } from '../../../utility/customHooks/resources'
import EditUI from './_editUI'
import { urlApi } from '../../../utility/helpers/consts'

const Edit = (props) => {
  const { data: { loading, error, items }, clean, update } = usePostResources()
  const { items: workstations } = useFetchResources(`${urlApi}/api/v1/workstations?all`)
  const { items: data, loading: loadingWorkstations, error: errorWorkstations } = workstations

  if (loadingWorkstations) return <LoadingSpinner />
  if (errorWorkstations) return <Error message={error.message} />
  return (
    <>
      <EditUI handleSubmit={(values) => update({ name: values.name, description: values.description, workstations_id: [values.workstations_id] }, `${urlApi}/api/v1/programs/${values.id}`)} {...props} workstations={data} />
      {loading && <AlertLoading message="Actualizando vigilancia médica" />}
      {error && <AlertError callback={() => clean()} />}
      {items && (
        <AlertSuccess
          message="La información de la vigilancia médica ha sido actualizada."
          callback={() => {
            document.getElementById('form-programs').reset()
            clean()
            history.goBack()
          }}
        />
      )}
    </>
  )
}

export default Edit
