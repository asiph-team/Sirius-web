import React from 'react'
import { Header } from '../../../components/custom'
import FormUI from '../_form'

const AddUI = (props) => {
  const { handleSubmit } = props
  return (
    <>
      <Header title="Agregar puesto de trabajo" icon="Briefcase" />
      <FormUI handleSubmit={handleSubmit} title="Agregar" />
    </>
  )
}

export default AddUI
