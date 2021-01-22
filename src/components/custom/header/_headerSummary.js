import React from 'react'
import { Row, Col, Button, Card, CardBody } from 'reactstrap'
import { ChevronLeft } from 'react-feather'
import { Link } from 'react-router-dom'
import { history } from '../../../history'
import { percent } from '../../../utility/helpers/functions'

const HeaderSummary = (props) => {
  const { info, title, back, detail } = props

  return (
    <Row className="mb-2">
      <Col sm="12" lg="12" className="d-flex align-items-center justify-items-between">
        <Button color="primary" onClick={() => history.goBack()}>
          <ChevronLeft size={14} />
            &nbsp;Volver
        </Button>
      </Col>
      <Col sm="12" lg="12" className="d-flex flex-wrap align-items-center mt-1">
        <Card className="d-flex flex-wrap col-lg-12">
          <CardBody className="col-lg-12">
            <h1>{detail && `${detail.user.name} ${detail.user.lastname}`}</h1>
          </CardBody>
          <Row className="p-2">
            <Col sm="6" lg="2">
              <h4>
                Invitado:
                {' '}
                {detail && detail.invited}
              </h4>
            </Col>
            <Col sm="6" lg="2">
              <h4>
                Asistido:
                {' '}
                {detail && detail.attended}
              </h4>
            </Col>
            <Col sm="6" lg="2">
              <h4>
                Ausente:
                {' '}
                {detail && detail.not_assist}
              </h4>
            </Col>
            <Col sm="6" lg="2">
              <h4>
                Total:
                {' '}
                {detail && detail.total}
              </h4>
            </Col>
            <Col sm="6" lg="2">
              <h4>
                Asistencia:
                {' '}
                {detail && percent(detail.attended, detail.total)}
              </h4>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

export default HeaderSummary
