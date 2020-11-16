import React from 'react'
import moment from 'moment'
import { Header } from '../../../components/custom'
import FormUI from '../_form'

const EditUI = (props) => {
  const { handleSubmit, employees, location: { state: { placeholder } } } = props
  const options = employees ? employees.data.data.map((item) => ({ label: item.name, value: item.id })) : null
  placeholder.date_initial = moment(placeholder.date_initial, 'DD/MM/YYYY').toDate()
  placeholder.date_committed = moment(placeholder.date_committed, 'DD/MM/YYYY').toDate()
  return (
    <>
      <Header title="Editar plan de acción" icon="BookOpen" />
      <FormUI handleSubmit={handleSubmit} title="Guardar" options={options} placeholder={placeholder} />
    </>
  )
}

export default EditUI
