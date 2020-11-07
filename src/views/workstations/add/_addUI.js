import React from 'react'
import { Header } from '../../../components/custom'
import FormUI from '../_form'
import { config } from '../_form/_config'

const AddUI = (props) => {
  const { handleSubmit } = props
  return (
    <>
      <Header title="Agregar puesto de trabajo" icon="Briefcase" />
      <FormUI handleSubmit={handleSubmit} config={config} title="Agregar" />
    </>
  )
}

export default AddUI
