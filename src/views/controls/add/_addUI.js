import React from 'react'
import { Header } from '../../../components/custom'
import FormUI from '../_form'

const AddUI = (props) => {
  const { handleSubmit, areas, activity } = props
  const options = areas ? areas.data.data.map((item) => ({ label: item.name, value: item.id })) : null
  return (
    <>
      <Header title="Agregar medida de control" icon="Users" />
      <FormUI handleSubmit={handleSubmit} title="Agregar" options={options} activity={activity} />
    </>
  )
}

export default AddUI
