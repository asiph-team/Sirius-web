import React from 'react'
import { Header } from '../../../components/custom'
import FormUI from '../_form'

const EditUI = (props) => {
  const { handleSubmit, location: { state: { placeholder } }, workers } = props
  const options = workers ? workers.map((item) => ({ label: item.name, value: item.id })) : null
  return (
    <>
      <Header title="Agregar área de trabajo" icon="Box" />
      <FormUI handleSubmit={handleSubmit} title="Editar" options={options} placeholder={placeholder} />
    </>
  )
}

export default EditUI
