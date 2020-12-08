import React from 'react'
import moment from 'moment'
import { Header } from '../../../components/custom'
import FormUI from '../_form'

const EditUI = (props) => {
  const { handleSubmit, location: { state: { placeholder } }, activities } = props
  const options = activities ? activities.data.data.map((item) => ({ label: item.name, value: item.id })) : null
  placeholder.date_start = placeholder.date_start ? moment(placeholder.date_start, 'YYYY-MM-DD').toDate() : moment(new Date(), 'YYYY-MM-DD').toDate()
  return (
    <>
      <Header title="Editar medida de control" icon="Users" />
      <FormUI handleSubmit={handleSubmit} title="Guardar cambios" options={options} placeholder={placeholder} />
    </>
  )
}

export default EditUI
