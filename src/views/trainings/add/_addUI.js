import React from 'react'
import { Header } from '../../../components/custom'
import FormUI from '../_form'

const AddUI = (props) => {
  const { handleSubmit, employees } = props
  const options = employees ? employees.map((item) => ({ label: item.name, value: item.id })) : null
  return (
    <>
      <Header title="Agregar capacitación" icon="Clipboard" />
      <FormUI handleSubmit={handleSubmit} title="Agregar" options={options} />
    </>
  )
}

export default AddUI
