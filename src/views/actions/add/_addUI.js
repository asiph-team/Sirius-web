import React from 'react'
import { Header } from '../../../components/custom'
import FormUI from '../_form'
import { userData } from '../../../utility/helpers/functions'

const AddUI = (props) => {
  const { handleSubmit, employees } = props
  const user = userData()
  const employeesList = employees ? employees.data.data.map((item) => ({ label: item.name, value: item.id })).sort((a, b) => { return a.label > b.label ? 1 : -1 }) : null
  const options = (user.role === 'chief_of_area') ? [{ label: user.name, value: user.id }] : employeesList
  const placeholder = (user.role === 'chief_of_area') ? { manager_id: user.id } : null
  return (
    <>
      <Header title="Agregar plan de acción" icon="BookOpen" />
      <FormUI handleSubmit={handleSubmit} title="Agregar" options={options} placeholder={placeholder} />
    </>
  )
}

export default AddUI
