import React from 'react'
import moment from 'moment'
import { Header } from '../../../components/custom'
import FormUI from '../_form'

const EditUI = (props) => {
  const { handleSubmit, location: { state: { placeholder } }, employees, participants } = props
  placeholder.start_date = moment(placeholder.start_date, 'DD/MM/YYYY').toDate()
  placeholder.end_date = moment(placeholder.end_date, 'DD/MM/YYYY').toDate()
  placeholder.frequency = placeholder.frequency.toLowerCase()
  const employeesList = employees ? employees.data.data.map((item) => ({ label: `${item.name} ${item.lastname}`, value: item.id })) : null
  const participantsList = participants ? participants.data.map((item) => (item.id)) : null
  return (
    <>
      <Header title="Editar vigilancia médica" icon="Box" />
      <FormUI
        handleSubmit={handleSubmit}
        title="Guardar"
        placeholder={{
          id: placeholder.id,
          name: placeholder.name,
          frequency: placeholder.frequency,
          start_date: placeholder.start_date,
          end_date: placeholder.end_date,
          description: placeholder.description,
          employees_id: participantsList,
        }}
        employees={employeesList}
        defaultData={participantsList}
      />
    </>
  )
}

export default EditUI
