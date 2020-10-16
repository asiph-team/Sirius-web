import React from 'react'
import { Header } from '../../../components/custom'
import FormUI from '../_form'

const EditUI = (props) => {
  const { handleSubmit, location: { state: { placeholder } }, workstations } = props
  const options = workstations ? workstations.map((item) => ({ label: item.name, value: item.id })).sort((a, b) => { return a.label > b.label ? 1 : -1 }) : null
  return (
    <>
      <Header title="Editar actividad" icon="Activity" />
      <FormUI handleSubmit={handleSubmit} title="Editar" options={options} placeholder={{ name: placeholder.name, id: placeholder.id, description: placeholder.description, workstation: placeholder.workstations[0] ? placeholder.workstations[0].id : null }} />
    </>
  )
}

export default EditUI
