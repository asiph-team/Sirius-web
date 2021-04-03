import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'

const AlertError = (props) => {
  const { callback, error } = props
  let values = ''
  try {
    const { response: { data: { error: { message } } } } = error
    values = message ? Object.values(message) : null
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
  } catch {
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


}

export default AlertError
