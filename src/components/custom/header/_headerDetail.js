import React from 'react'
import { Row, Col, Button, Card, CardBody } from 'reactstrap'
import { ChevronLeft } from 'react-feather'
import { Link } from 'react-router-dom'
import { history } from '../../../history'

const HeaderDetail = (props) => {
  const { detail, title, back } = props
  return (
    <Row className="mb-2">
      <Col sm="12" lg="12" className="d-flex align-items-center justify-items-between">
        {back ? (
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
                &nbsp;Volver a {' '}
              {title}
            </Button>
          )}
      </Col>
      <Col sm="12" lg="12" className="d-flex flex-wrap align-items-center mt-1">
        <Card className="d-flex flex-wrap col-lg-12">
          <CardBody className="col-lg-12">
            <h1>{detail.name}</h1>
            <h3>{detail.description}</h3>
          </CardBody>
          <Row className="px-2">
            <Col>
              <h4>
                Fecha inicio:
                {' '}
                {detail.start_date}
              </h4>
            </Col>
            <Col>
              <h4>
                Fecha Termino:
                {' '}
                {detail.end_date}
              </h4>
            </Col>
            <Col>
              <h4>
                Frecuencia:
                {' '}
                {detail.frequency}
              </h4>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

export default HeaderDetail