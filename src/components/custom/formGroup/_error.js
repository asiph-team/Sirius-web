import React from 'react'
import { ErrorMessage } from 'formik'

export const CustomErrorMessage = (props) => {
  const { name } = props
  return (
    <ErrorMessage
      name={name}
      component="div"
      className="field-error text-danger small"
    />
  )
}

export default CustomErrorMessage
