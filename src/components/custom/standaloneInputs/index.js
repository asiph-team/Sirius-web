import React from 'react'
import { FormGroup as Fgroup } from 'reactstrap'
import * as CustomInputField from './_inputs'

const FormGroup = (props) => {
  const { input, name } = props
  const Tag = CustomInputField[input]
  return (
    <Fgroup>
      <Tag {...props} />
    </Fgroup>
  )
}

export default FormGroup
