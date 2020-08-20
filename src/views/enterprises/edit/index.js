import React from 'react'
import { history } from '../../../history'
import { AlertError, AlertLoading, AlertSuccess } from '../../../components/custom'
import { usePostResources } from '../../../utility/customHooks/resources'
import EditUI from './_editUI'

const Edit = (props) => {
  const url = 'api/v1/enterprises/update'
  const { data: { loading, error, items }, postData, clean } = usePostResources()
  return (
    <>
      <EditUI handleSubmit={(values) => postData(values, url)} {...props} />
      {loading && <AlertLoading message="Actualizando empresa" />}
      {error && <AlertError callback={() => clean()} />}
      {items && (
      <AlertSuccess
        message="La información de la empresa ha sido actualizada."
        callback={() => {
          document.getElementById('form-enterprises').reset()
          clean()
          history.goBack()
        }}
      />
      )}
    </>
  )
}

export default Edit
