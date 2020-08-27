import React from 'react'
import { Header } from '../../../components/custom'
import FormUI from '../_form'

const AddUI = (props) => {
  const { handleSubmit, jobs } = props
  const options = jobs ? jobs.map((item) => ({ label: item.name, value: item.id })) : null
  return (
    <>
      <Header title="Agregar actividad" icon="Activity" />
      <FormUI handleSubmit={handleSubmit} title="Agregar" options={options} />
    </>
  )
}

export default AddUI
