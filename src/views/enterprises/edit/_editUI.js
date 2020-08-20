import React from 'react'
import { Header } from '../../../components/custom'
import FormUI from '../_form'

function phoneFormat(phone) {
  return phone.replace('+569 ', '').replace(/\s/g, '')
}

const EditUI = (props) => {
  const { handleSubmit, location: { state: { placeholder } } } = props
  placeholder.phone = phoneFormat(placeholder.phone)
  placeholder.CRL = phoneFormat(placeholder.CRL)
  placeholder.CRT = phoneFormat(placeholder.CRT)
  return (
    <>
      <Header title="Editar empresa" icon="Shield" />
      <FormUI handleSubmit={handleSubmit} title="Editar" placeholder={placeholder} />
    </>
  )
}

export default EditUI
