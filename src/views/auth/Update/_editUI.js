import React from 'react'
import FormUI from './_form'

const EditUI = (props) => {
  const { handleSubmit, userData } = props
  return (
    <>
      <FormUI handleSubmit={handleSubmit} title="Actualizar" userData={userData} />
    </>
  )
}

export default EditUI
