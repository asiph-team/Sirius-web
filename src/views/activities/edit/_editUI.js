import React from 'react'
import { Header } from '../../../components/custom'
import FormUI from '../_form'

const EditUI = (props) => {
  const { handleSubmit, location: { state: { placeholder } }, jobs } = props
  const options = jobs ? jobs.map((item) => ({ label: item.name, value: item.id })) : null
  return (
    <>
      <Header title="Editar actividad" icon="Activity" />
      <FormUI handleSubmit={handleSubmit} title="Editar" options={options} placeholder={placeholder} />
    </>
  )
}

export default EditUI
