import React from 'react'
import { Header } from '../../../components/custom'
import FormUI from '../_form'

const EditUI = (props) => {
  const { handleSubmit, location: { state: { placeholder } } } = props
  return (
    <>
      <Header title="Editar puesto de trabajo" icon="Briefcase" />
      <FormUI handleSubmit={handleSubmit} title="Guardar cambios" placeholder={placeholder} />
    </>
  )
}

export default EditUI
