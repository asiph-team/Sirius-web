import React from 'react'
import {
  Button, Col, Row,
} from 'reactstrap'
import { Link } from 'react-router-dom'

const FormSubmit = (props) => {
  const { back, title, onClose, activityId } = props
  return (
    <Row>
      <Col sm="12 d-flex justify-content-end">
        <div>
          {back && <Link to={back}><Button color="light">Cancelar</Button></Link>}
          {activityId && <Link to={{ pathname: '/dashboard/controls', state: { activity_id: activityId } }}><Button color="light">Cancelar</Button></Link>}
          {onClose && <Button onClick={onClose} color="light">Cancelar</Button>}
          <Button color="primary" className="ml-1" type="submit">{title}</Button>
        </div>
      </Col>
    </Row>
  )
}

export default FormSubmit
