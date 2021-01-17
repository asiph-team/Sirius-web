import React from 'react'
import { Header } from '../../../components/custom'
import FormUI from '../_form'

const EditUI = (props) => {
  const { handleSubmit, location: { state: { placeholder } }, workstations, risks } = props
  const options = workstations ? workstations.map((item) => ({ label: item.name, value: item.id })).sort((a, b) => { return a.label > b.label ? 1 : -1 }) : null
  return (
    <>
      <Header title="Editar actividad" icon="Activity" />
      {
        risks && (
          <FormUI
            handleSubmit={handleSubmit}
            title="Guardar"
            options={options}
            placeholder={
              {
                risk: placeholder.risk,
                name: placeholder.name,
                id: placeholder.id,
                description: placeholder.description,
                workstation: placeholder.workstations ? placeholder.workstations.id : null,
                risks_id: placeholder.risks.map((item) => item.id),
              }
            }
            risks={risks.data}
          />
        )
      }
    </>
  )
}

export default EditUI
