import React from 'react'
import moment from 'moment'
import { Header } from '../../../components/custom'
import FormUI from '../_form'
import { editConfig } from '../_form/_config'
import { trainingSchemaEdit } from '../_form/_validation'

const AddUI = (props) => {
  const { handleSubmit, location: { state: { placeholder } }, employees, participants } = props
  placeholder.start_date = moment(placeholder.start_date, 'DD/MM/YYYY').toDate()
  placeholder.end_date = moment(placeholder.end_date, 'DD/MM/YYYY').toDate()
  const dataParticipants = participants ? participants.data.data.map((item) => ({ label: item.name, value: item.id })) : null
  const options = employees ? employees.data.data.map((item) => ({ label: item.name, value: item.id })) : null
  return (
    <>
      <Header title="Actualizar capacitación" icon="Clipboard" />
      <FormUI handleSubmit={handleSubmit} title="Guardar" config={editConfig} options={options} validationSchema={trainingSchemaEdit} defaultData={dataParticipants} placeholder={placeholder} />
    </>
  )
}

export default AddUI
