import React from 'react'
import {
  Card, CardBody,
} from 'reactstrap'
import { Header } from '../../../components/custom'
import FormUI from '../_form'

const AddUI = (props) => {
  const { handleSubmit, workstations, back } = props
  const options = workstations
    ? workstations.data.data
      .filter((ws) => ws.type !== 'chief_of_area')
      .map((item) => ({ label: item.name, value: item.id }))
      .sort((a, b) => (a.label > b.label ? 1 : -1)) : null

  return (
    <>
      <Header title="Agregar trabajador" icon="Users" />
      <Card>
        <CardBody>
          <FormUI handleSubmit={handleSubmit} title="Agregar" options={options} back={back} />
        </CardBody>
      </Card>

    </>
  )
}
const AddUIForm = (props) => {
  const { handleSubmit, workstations, onClose } = props
  const options = workstations
    ? workstations.data.data
      .filter((ws) => ws.type !== 'chief_of_area')
      .map((item) => ({ label: item.name, value: item.id }))
      .sort((a, b) => (a.label > b.label ? 1 : -1)) : null
  return (
    <>
      <Header title="Agregar trabajador" icon="Users" />
      <FormUI handleSubmit={handleSubmit} title="Agregar" options={options} onClose={onClose} />
    </>
  )
}

export { AddUI, AddUIForm }
