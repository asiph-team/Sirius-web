import React from 'react'
import moment from 'moment'
import { Card, CardBody } from 'reactstrap'
import { Header } from '../../../components/custom'
import FormUI from '../_form'

const EditUI = (props) => {
  const { handleSubmit, location: { state: { placeholder } }, employees } = props
  const options = employees ? employees.data.data.map((item) => ({ label: item.name, value: item.id })).sort((a, b) => { return a.label > b.label ? 1 : -1 }) : null
  placeholder.date_start = placeholder.date_start ? moment(placeholder.date_start, 'YYYY-MM-DD').toDate() : moment(new Date(), 'YYYY-MM-DD').toDate()
  return (
    <>
      <Header title="Editar trabajador" icon="Users" />
      <Card>
        <CardBody>
          <FormUI handleSubmit={handleSubmit} title="Guardar cambios" options={options} placeholder={placeholder} back="/dashboard/employees" />
        </CardBody>
      </Card>
    </>
  )
}

export default EditUI
