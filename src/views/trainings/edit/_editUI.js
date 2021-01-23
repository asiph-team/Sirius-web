import React from 'react'
import moment from 'moment'
import { Header } from '../../../components/custom'
import FormUI from '../_form'
import { trainingSchemaEdit } from '../_form/_validation'

const EditUI = (props) => {
  const { handleSubmit, location: { state: { placeholder } }, employees, participants } = props
  placeholder.start_date = moment(placeholder.start_date, 'DD/MM/YYYY').toDate()
  placeholder.end_date = moment(placeholder.end_date, 'DD/MM/YYYY').toDate()
  const dataParticipants = participants ? participants.data.data.map((item) => (item.id)) : null
  const options = employees ? employees.data.data.map((item) => ({ label: `${item.name} ${item.lastname}`, value: item.id })).sort((a, b) => { return a.label > b.label ? 1 : -1 }) : null
  return (
    <>
      <Header title="Actualizar capacitación" icon="Clipboard" />
      {
        dataParticipants && (
          <FormUI
            handleSubmit={handleSubmit}
            title="Guardar"
            options={options}
            validationSchema={trainingSchemaEdit}
            defaultData={dataParticipants}
            placeholder={{
              id: placeholder.id,
              description: placeholder.description,
              end_date: placeholder.end_date,
              start_date: placeholder.start_date,
              frequency: placeholder.frequency.toLowerCase(),
              name: placeholder.name,
              employees_id: dataParticipants,
            }}
            employees={options}
          />
        )
      }
    </>
  )
}

export default EditUI
