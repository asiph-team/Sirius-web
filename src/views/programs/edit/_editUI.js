import React from 'react'
import { Header } from '../../../components/custom'
import FormUI from '../_form'
import { editConfig } from '../_form/_config'
import { programsSchemaEdit } from '../_form/_validation'

const EditUI = (props) => {
  const { handleSubmit, location: { state: { placeholder } }, workstations } = props
  const options = workstations ? workstations.data.data.map((item) => ({ label: item.name, value: item.id })) : null
  placeholder.workstations_id = placeholder.workstation_id ? placeholder.workstations_id : null
  return (
    <>
      <Header title="Editar programa de vigilancia" icon="Box" />
      <FormUI handleSubmit={handleSubmit} title="Editar" config={editConfig} validationSchema={programsSchemaEdit} options={options} placeholder={placeholder} />
    </>
  )
}

export default EditUI
