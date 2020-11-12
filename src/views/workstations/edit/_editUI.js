import React from 'react'
import { Header } from '../../../components/custom'
import FormUI from '../_form'
import { Editconfig } from '../_form/_config'

const EditUI = (props) => {
  const { handleSubmit, location: { state: { placeholder } }, areas } = props
  const options = areas ? areas.map((item) => ({ label: item.name, value: item.id })).sort((a, b) => { return a.label > b.label ? 1 : -1 }) : null
  return (
    <>
      <Header title="Editar puesto de trabajo" icon="Briefcase" />
      <FormUI handleSubmit={handleSubmit} options={options} title="Guardar cambios" config={Editconfig} placeholder={placeholder} />
    </>
  )
}

export default EditUI
