import React from 'react'
import moment from 'moment'
import { Header } from '../../../components/custom'
import FormUI from '../_form'
import { editConfig } from '../_form/_config'

const EditUI = (props) => {
  const { handleSubmit, location: { state: { placeholder } }, workstations, employees, participants  } = props
  placeholder.start_date = moment(placeholder.start_date, 'DD/MM/YYYY').toDate()
  placeholder.end_date = moment(placeholder.end_date, 'DD/MM/YYYY').toDate()
  const options = workstations ? workstations.data.data.map((item) => ({ label: item.name, value: item.id })) : null
  const employeesList = employees ? employees.data.data.map((item) => ({ label: item.name, value: item.id })) : null
  const dataParticipants = participants ? participants.data.data.map((item) => ({ label: item.name, value: item.id })) : null
  return (
    <>
      <Header title="Editar vigilancia médica" icon="Box" />
      <FormUI
        handleSubmit={handleSubmit}
        title="Guardar"
        config={editConfig}
        options={options}
        placeholder={placeholder}
        employees={employeesList}
        defaultData={dataParticipants}
      />
    </>
  )
}

export default EditUI
