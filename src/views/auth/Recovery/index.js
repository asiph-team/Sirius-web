import React from 'react'
import { history } from '../../../history'
import { AlertError, AlertLoading, AlertSuccess } from '../../../components/custom'
import { usePostResources } from '../../../utility/customHooks/resources'
import EditUI from './_editUI'
import { urlApi, baseApiUrl, updatePasswordUrl } from '../../../utility/helpers/consts'

const Recovery = (props) => {
  const { onClose, setVisibility, userData, updateValidPassword } = props
  const { data: { loading, error, items }, patchData, clean } = usePostResources()
  return (
    <>
      <EditUI onClose={onClose} handleSubmit={(values) => patchData(values, `${urlApi}${baseApiUrl}${updatePasswordUrl[userData.role]}`)} {...props} />
      {loading && <AlertLoading message="Actualizando contraseña" />}
      {error && <AlertError callback={() => clean()} />}
      {items && (
        <AlertSuccess
          message="La contraseña ha sido actualizada."
          callback={() => {
            document.getElementById('form-update-password').reset()
            clean()
            updateValidPassword({ ...userData, flag: true })
            setVisibility(false)
            history.goBack()
          }}
        />
      )}
    </>
  )
}

export default Recovery
