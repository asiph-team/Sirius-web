import React from 'react'
import { history } from '../../../history'
import { AlertError, AlertLoading, AlertSuccess } from '../../../components/custom'
import { usePostResources } from '../../../utility/customHooks/resources'
import ResetUI from './_resetUI'

const Edit = (props) => {
  const url = 'users/forgetPassword'
  const { data: { loading, error, items }, postData, clean } = usePostResources()
  return (
    <>
      <ResetUI handleSubmit={(values) => postData(values, url)} {...props} />
      {loading && <AlertLoading message="Recuperando contraseña" />}
      {error && <AlertError error={error} callback={() => clean()} />}
      {items && (
        <AlertSuccess
          message="Hemos enviado un enlace a tu correo para que recuperes tu contraseña"
          callback={() => {
            document.getElementById('form-recovery-password').reset()
            clean()
            history.goBack()
          }}
        />
      )}
    </>
  )
}

export default Edit
