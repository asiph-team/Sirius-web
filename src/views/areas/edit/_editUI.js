import React from 'react'
import { Header } from '../../../components/custom'
import FormUI from '../_form'

const EditUI = (props) => {
  const { handleSubmit, location: { state: { placeholder } }, employees } = props
  const options = employees ? employees.data.data.map((item) => ({ label: item.name, value: item.id })) : null
  const { chief_areas_id, description, name, id } = placeholder
  return (
    <>
      <Header title="Editar área de trabajo" icon="Box" />
      <FormUI handleSubmit={handleSubmit} title="Guardar" options={options} placeholder={{ name, id, description, user_id: chief_areas_id }} />
    </>
  )
}

export default EditUI
