import React from 'react'
import { Alert, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

const Error = (props) => {
  const { message } = props
  try {
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
  } catch (error) {
    return (
      <Row className="m-2">
        <Alert color="danger" sm={12} md={12} lg={6}>
          <Link to="/" style={{ textDecoration: 'none', color: '#EF476F' }}>
            <span>Se ha producido un error</span>
          </Link>
        </Alert>
      </Row>
    )
  }
}

export default Error
