import React from 'react'
import { Header } from '../../../components/custom'
import FormUI from '../_form'
import { config } from '../_form/_config'
import { programsSchema } from '../_form/_validation'

const AddUI = (props) => {
  const { handleSubmit, employees } = props
  const options = employees ? employees.data.data.map((item) => ({ label: item.name, value: item.id })) : null
  return (
    <>
      <Header title="Agregar vigilancia médica" icon="Box" />
      <FormUI handleSubmit={handleSubmit} title="Agregar" options={options} config={config} validationSchema={programsSchema} />
    </>
  )
}

export default AddUI
