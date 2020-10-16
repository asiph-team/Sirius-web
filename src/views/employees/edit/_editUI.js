import React from 'react'
import moment from 'moment'
import { Header } from '../../../components/custom'
import { phoneFormat } from '../../../utility/helpers/functions'

import FormUI from '../_form'

const EditUI = (props) => {
  const { handleSubmit, location: { state: { placeholder } }, employees } = props
  const options = employees ? employees.data.data.map((item) => ({ label: item.name, value: item.id })) : null
  placeholder.date_start = placeholder.date_start ? moment(placeholder.date_start, 'YYYY-MM-DD').toDate() : moment(new Date(), 'YYYY-MM-DD').toDate()
  placeholder.phone = phoneFormat(placeholder.phone)
  placeholder.workstation_id = placeholder.workstations[0] ? placeholder.workstations[0].id : ''
  return (
    <>
      <Header title="Editar trabajador" icon="Users" />
      <FormUI handleSubmit={handleSubmit} title="Editar" options={options} placeholder={placeholder} />
    </>
  )
}

export default EditUI
