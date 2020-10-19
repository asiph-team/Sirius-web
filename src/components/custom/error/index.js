import React from 'react'
import { Alert, Row } from 'reactstrap'

const Error = (props) => {
  const { message } = props
  const values = Object.values(message.response.data.error.message)
  return (
    <Row className="m-2">
      {
        values.map((item) => (
          <Alert color="danger" className="w-100">
            <span>{item}</span>
          </Alert>
        ))
      }
    </Row>
  )
}

export default Error
