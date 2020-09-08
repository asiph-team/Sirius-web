import React from 'react'
import { history } from '../../../history'
import { AlertError, AlertLoading, AlertSuccess } from '../../../components/custom'
import { usePostResources } from '../../../utility/customHooks/resources'
import EditUI from './_editUI'

const Edit = (props) => {
  const url = 'api/v1/workstations/update'
  const { data: { loading, error, items }, postData, clean } = usePostResources()
  return (
    <>
      <EditUI handleSubmit={(values) => postData(values, url)} {...props} />
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
