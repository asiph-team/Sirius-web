import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'

const AlertError = (props) => {
  const { callback, error } = props
  const values = Object.values(error.response.data.error.message)
  return (
    <SweetAlert
      title=""
      onConfirm={() => callback()}
      error
    >
      <h1>¡Ups!</h1>
      <p>Se ha producido un error mientras se realizaba la operación.</p>
      {
        values && values.map((item) => (
          <p>{item}</p>
        ))
      }
    </SweetAlert>
  )
}

export default AlertError
