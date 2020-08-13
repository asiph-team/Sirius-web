import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'

const AlertError = (props) => {
  const { callback } = props
  return (
    <SweetAlert
      title=""
      onConfirm={() => callback()}
      error
    >
      <h1>¡Ups!</h1>
      <p>Se ha producido un error mientras se realizaba la operación.</p>
    </SweetAlert>
  )
}

export default AlertError
