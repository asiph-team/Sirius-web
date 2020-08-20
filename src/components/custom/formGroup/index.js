import React from 'react'
import { FormGroup as Fgroup } from 'reactstrap'
import * as CustomInputField from './_input'

import { CustomErrorMessage } from './_error'

const FormGroup = (props) => {
  const { input, name } = props
  const Tag = CustomInputField[input]
  return (
    <Fgroup>
      <Tag {...props} />
      <CustomErrorMessage name={name} />
    </Fgroup>
  )
}

export default FormGroup
