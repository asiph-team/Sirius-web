import React from 'react'
import { history } from '../../../history'
import { AlertError, AlertLoading, AlertSuccess } from '../../../components/custom'
import { usePostResources } from '../../../utility/customHooks/resources'
import AddUI from './_addUI'
import { urlApi } from '../../../utility/helpers/consts'

const Add = () => {
  const url = `${urlApi}/api/v1/enterprises`
  const { data: { loading, error, items }, postData, clean } = usePostResources()
  return (
    <>
      <AddUI handleSubmit={(values) => postData({ name: values.name, spin: values.spin, heading: values.heading, rut: values.rut, address: values.address, phone: values.phone ? `9${values.phone}` : null, email: values.email, size: values.size, LR: values.LR, TR: values.TR, CLR: values.CLR, CTR: values.CTR, status: 1 }, url)} />
      {loading && <AlertLoading message="Almacenando empresa" />}
      {error && <AlertError error={error} callback={() => clean()} />}
      {items && (
        <AlertSuccess
          message="La empresa ha sido creada."
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
export default Add
