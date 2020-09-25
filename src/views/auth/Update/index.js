import React from 'react'
import { history } from '../../../history'
import { AlertError, AlertLoading, AlertSuccess } from '../../../components/custom'
import { usePostResources } from '../../../utility/customHooks/resources'
import EditUI from './_editUI'

const Edit = (props) => {
  const { onClose, setVisibility } = props
  const { data: { loading, error, items }, patchData, clean } = usePostResources()
  return (
    <>
      <EditUI onClose={onClose} handleSubmit={(values, url) => patchData(values, url)} {...props} />
      {loading && <AlertLoading message="Actualizando contraseña" />}
      {error && <AlertError callback={() => clean()} />}
      {items && (
      <AlertSuccess
        message="La contraseña ha sido actualizada."
        callback={() => {
          document.getElementById('form-update-password').reset()
          clean()
          setVisibility(false)
          history.goBack()
        }}
      />
      )}
    </>
  )
}

export default Edit
