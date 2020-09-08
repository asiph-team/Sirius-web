import React from 'react'
import { Header } from '../../../components/custom'
import FormUI from '../_form'

const AddUI = (props) => {
  const { handleSubmit, workstations } = props
  const options = workstations ? workstations.map((item) => ({ label: item.name, value: item.id })) : null
  return (
    <>
      <Header title="Agregar actividad" icon="Activity" />
      <FormUI handleSubmit={handleSubmit} title="Agregar" options={options} />
    </>
  )
}

export default AddUI
