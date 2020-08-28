import React from 'react'
import moment from 'moment'
import { Header } from '../../../components/custom'
import FormUI from '../_form'

const AddUI = (props) => {
  const { handleSubmit, location: { state: { placeholder } }, employees } = props
  placeholder.date = moment(placeholder.date, 'DD/MM/YYYY').toDate()
  const options = employees ? employees.map((item) => ({ label: item.name, value: item.id })) : null
  return (
    <>
      <Header title="Actualizar capacitación" icon="Clipboard" />
      <FormUI handleSubmit={handleSubmit} title="Editar" options={options} placeholder={placeholder} />
    </>
  )
}

export default AddUI
