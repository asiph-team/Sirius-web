import React from 'react'
import { history } from '../../../history'
import { AlertError, AlertLoading, AlertSuccess } from '../../../components/custom'
import { usePostResources } from '../../../utility/customHooks/resources'
import EditUI from './_editUI'
import { urlApi } from '../../../utility/helpers/consts'

const Edit = (props) => {
  const url = `${urlApi}/api/v1/enterprises`
  const { data: { loading, error, items }, update, clean } = usePostResources()
  return (
    <>
      <EditUI handleSubmit={(values) => update({ name: values.name, spin: values.spin, heading: values.heading, rut: values.rut, address: values.address, phone: values.phone ? `9${values.phone}` : null, email: values.email, size: values.size, LR: values.LR, TR: values.TR, CLR: values.CLR, CTR: values.CTR, status: 1 }, `${url}/${values.id}`)} {...props} />
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
