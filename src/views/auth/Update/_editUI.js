import React from 'react'
import FormUI from './_form'

const EditUI = (props) => {
  const { handleSubmit, userData, onClose } = props
  return (
    <>
      <FormUI handleSubmit={handleSubmit} title="Actualizar" userData={userData} onClose={onClose} />
    </>
  )
}

export default EditUI
