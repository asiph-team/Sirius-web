import React from 'react'
import { Header } from '../../../components/custom'
import FormUI from '../_form'

const EditUI = (props) => {
  const { handleSubmit, location: { state: { placeholder } }, employees } = props
  const options = employees ? employees.data.map((item) => ({ label: `${item.name} ${item.lastname}`, value: item.id })).sort((a, b) => { return a.label > b.label ? 1 : -1 }) : null
  const { chief_areas_id, description, name, id } = placeholder
  return (
    <>
      <Header title="Editar área de trabajo" icon="Box" />
      <FormUI handleSubmit={handleSubmit} title="Guardar" options={options} placeholder={{ name, id, description, user_id: chief_areas_id }} />
    </>
  )
}

export default EditUI
