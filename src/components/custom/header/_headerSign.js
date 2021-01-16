import React from 'react'
import moment from 'moment'
import { Row, Col, Button, Card, CardBody } from 'reactstrap'
import { ChevronLeft, Edit3 } from 'react-feather'
import { Link } from 'react-router-dom'
import { history } from '../../../history'

const HeaderSign = (props) => {
  const { detail, title, back, relator, show } = props
  return (
    <Row className="mb-2">
      <Col sm="12" lg="12" className="d-flex align-items-center justify-items-between">
        {back
          ? (
            <Link to={back}>
              <Button color="primary">
                <ChevronLeft size={14} />
                &nbsp;Volver a
                {' '}
                {title}
              </Button>
            </Link>
          ) : (
            <Button color="primary" onClick={() => history.goBack()}>
              <ChevronLeft size={14} />
                &nbsp;Volver a
              {' '}
              {title}
            </Button>
          )}
      </Col>
      <Col sm="12" lg="12" className="d-flex flex-wrap align-items-center mt-1">
        <Card className="d-flex flex-wrap col-lg-12">
          <CardBody className="d-flex flex-wrap col-lg-12">
            <Col><h1>{detail.name}</h1></Col>

            <Col className="d-flex align-items-center justify-content-end">
              {
                relator && (
                  <Button onClick={() => show(detail, 'trainerSignature')}>
                    <Edit3 size={14} />
                    &nbsp;Firma Relator
                  </Button>
                )
              }
            </Col>

          </CardBody>
          <Row className="px-2">
            <Col>
              <h4>
                Fecha:
                {' '}
                {moment(detail.date).format('DD/MM/YYYY')}
              </h4>
            </Col>
            <Col>
              <h4>
                Invitados:
                {' '}
                {detail.total_invited}
              </h4>
            </Col>
            <Col>
              <h4>
                Asistencia:
                {' '}
                {detail.total_assisted}
              </h4>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

export default HeaderSign
