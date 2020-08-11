import React from 'react'
import { Alert, Row } from 'reactstrap'

const Error = (props) => {
  const { message } = props
  return (
    <Row className="m-2">
      <Alert color="danger" className="w-100">
        <span>{message}</span>
      </Alert>
    </Row>
  )
}

export default Error
