import React from 'react'
import moment from 'moment'
import { Header } from '../../../components/custom'
import { phoneFormat } from '../../../utility/helpers/functions'
import FormUI from '../_form'

const EditUI = (props) => {
  const { handleSubmit, location: { state: { placeholder } }, employees } = props
  const options = employees ? employees.map((item) => ({ label: item.name, value: item.id })) : null
  placeholder.date_start = moment(placeholder.date_start, 'DD/MM/YYYY').toDate()
  placeholder.phone = phoneFormat(placeholder.phone)
  return (
    <>
      <Header title="Editar trabajador" icon="Users" />
      <FormUI handleSubmit={handleSubmit} title="Editar" options={options} placeholder={placeholder} />
    </>
  )
}

export default EditUI
