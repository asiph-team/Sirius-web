import React from 'react'
import { history } from '../../../history'
import {
  AlertError, AlertLoading, AlertSuccess, Error,
} from '../../../components/custom'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { useFetchResources, usePostResources } from '../../../utility/customHooks/resources'
import EditUI from './_editUI'
import { urlApi } from '../../../utility/helpers/consts'

const Edit = (props) => {
  const url = `${urlApi}/api/v1/employees`
  const { data: { loading, error, items }, update, clean } = usePostResources()
  const { items: workstations } = useFetchResources(`${urlApi}/api/v1/workstations?all`)
  const { items: data, loading: loadingWorkstations, error: errorWorkstations } = workstations
  if (loadingWorkstations) return <LoadingSpinner />
  if (errorWorkstations) return <Error message={errorWorkstations} />
  return (
    <>
      <EditUI handleSubmit={(values) => update(values, `${url}/${values.id}`)} {...props} employees={data} />
      {loading && <AlertLoading message="Actualizando trabajador" />}
      {error && <AlertError error={error} callback={() => clean()} />}
      {items && (
        <AlertSuccess
          message="La información del trabajador ha sido actualizada."
          callback={() => {
            document.getElementById('form-employees').reset()
            clean()
            history.goBack()
          }}
        />
      )}
    </>
  )
}

export default Edit
