import React from 'react'
import { Header } from '../../../components/custom'
import FormUI from '../_form'

const EditUI = (props) => {
  const { handleSubmit, location: { state: { placeholder } }, employees } = props
  const options = employees ? employees.map((item) => ({ label: item.name, value: item.id })) : null
  const { chief_areas_id, description, name, id } = placeholder
  return (
    <>
      <Header title="Agregar área de trabajo" icon="Box" />
      <FormUI handleSubmit={handleSubmit} title="Editar" options={options} placeholder={{ id, manager: chief_areas_id, description, name }} />
    </>
  )
}

export default EditUI
