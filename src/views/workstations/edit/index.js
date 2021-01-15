import React from 'react'
import { history } from '../../../history'
import { AlertError, AlertLoading, AlertSuccess, Error } from '../../../components/custom'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'

import { usePostResources, useFetchResources } from '../../../utility/customHooks/resources'
import EditUI from './_editUI'
import { urlApi, baseApiUrl } from '../../../utility/helpers/consts'

const Edit = (props) => {
  const url = `${urlApi}/api/v1/workstations`
  const { data: { loading, error, items }, update, clean } = usePostResources()
  const { items: areas } = useFetchResources(`${urlApi}${baseApiUrl}areas?all`)
  const { items: data } = areas
  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return (
    <>
      <EditUI handleSubmit={(values) => update({ name: values.name, description: values.description, ...(values.information && { information: values.information }), area_id: values.area_id, ...(values.revisions && { revisions: values.revisions }) }, `${url}/${values.id}`)} {...props} areas={data} />
      {loading && <AlertLoading message="Actualizando puesto de trabajo" />}
      {error && <AlertError error={error} callback={() => clean()} />}
      {items && (
        <AlertSuccess
          message="La información del puesto de trabajo ha sido actualizado."
          callback={() => {
            document.getElementById('form-workstations').reset()
            clean()
            history.goBack()
          }}
        />
      )}
    </>
  )
}

export default Edit
