import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'

const AlertSuccess = (props) => {
  const { callback, message } = props
  return (
    <SweetAlert
      title=""
      onConfirm={() => callback()}
      success
      showConfirm
    >
      <h1>¡Ups!</h1>
      <p>{message}</p>
    </SweetAlert>
  )
}

export default AlertSuccess
