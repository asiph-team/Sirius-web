import React from 'react'
import { Header } from '../../../components/custom'
import FormUI from '../_form'
import { config } from '../_form/_config'
import { validationSchemaAdd } from '../_form/_validation'

const AddUI = (props) => {
  const { handleSubmit, employees, workstations } = props
  const options = workstations ? workstations.data.data.map((item) => ({ label: item.name, value: item.id })) : null
  const employeesList = employees ? employees.data.data.map((item) => ({ label: `${item.name} ${item.lastname}`, value: item.id })).sort((a, b) => { return a.label > b.label ? 1 : -1 }) : null
  return (
    <>
      <Header title="Agregar vigilancia médica" icon="Box" />
      <FormUI
        handleSubmit={handleSubmit}
        title="Agregar"
        config={config}
        options={options}
        employees={employeesList}
        validationSchema={validationSchemaAdd}
      />
    </>
  )
}

export default AddUI
