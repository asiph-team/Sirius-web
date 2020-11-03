import React from 'react'
import { history } from '../../../history'
import { AlertError, AlertLoading, AlertSuccess } from '../../../components/custom'
import { usePostResources } from '../../../utility/customHooks/resources'
import EditUI from './_editUI'
import { urlApi } from '../../../utility/helpers/consts'

const Edit = (props) => {
  const url = `${urlApi}/api/v1/workstations`
  const { data: { loading, error, items }, update, clean } = usePostResources()
  return (
    <>
      <EditUI handleSubmit={(values) => update({ name: values.name, description: values.description, information: values.information }, `${url}/${values.id}`)} {...props} />
      {loading && <AlertLoading message="Actualizando puesto de trabajo" />}
      {error && <AlertError callback={() => clean()} />}
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
