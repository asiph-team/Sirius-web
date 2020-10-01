import React from 'react'
import moment from 'moment'
import { Header } from '../../../components/custom'
import FormUI from '../_form'
import { editConfig } from '../_form/_config'

const AddUI = (props) => {
  const { handleSubmit, location: { state: { placeholder } }, employees } = props
  placeholder.start_date = moment(placeholder.start_date, 'DD/MM/YYYY').toDate()
  placeholder.end_date = moment(placeholder.end_date, 'DD/MM/YYYY').toDate()
  const options = employees ? employees.map((item) => ({ label: item.name, value: item.id })) : null
  return (
    <>
      <Header title="Actualizar capacitación" icon="Clipboard" />
      <FormUI handleSubmit={handleSubmit} title="Editar" config={editConfig} options={options} placeholder={placeholder} />
    </>
  )
}

export default AddUI
