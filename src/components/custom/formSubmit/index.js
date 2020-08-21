import React from 'react'
import {
  Button, Col, Row,
} from 'reactstrap'
import { Link } from 'react-router-dom'

const FormSubmit = (props) => {
  const { back, title } = props
  return (
    <Row>
      <Col sm="12 d-flex justify-content-end">
        <div>
          <Link to={back}><Button color="light">Cancelar</Button></Link>
          <Button color="primary" className="ml-1" type="submit">{title}</Button>
        </div>
      </Col>
    </Row>
  )
}

export default FormSubmit
