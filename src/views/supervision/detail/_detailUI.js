import React from 'react'
import { Card, CardBody, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { ChevronLeft, Eye } from 'react-feather'

const SupervisionDetailUI = (props) => {
  const { controlMeasure, data } = props
  const { activity, comment, chief_comment } = controlMeasure
  const failure = data.filter((item) => item.status === 'ok')
  return (
    <>
      <Row className="mb-2">
        <Col sm="12" lg="12" className="d-flex align-items-center justify-content-between">
          <div className="d-flex items-align-center">
            <Eye size={20} />
            <h3 className="font-medium-5 extension-title mb-0" data-tour="extension-title">
              &nbsp;
              Detalle de supervisión
            </h3>
          </div>
          <div className="d-flex items-align-center">
            <Link to="/dashboard/supervision">
              <Button size="" color="primary" className="my-1">
                <ChevronLeft size={14} />
                &nbsp;Volver
              </Button>
            </Link>
          </div>
        </Col>
      </Row>

      <Card>
        <CardBody>
          <h3 className="font-medium-5 extension-title mb-0" data-tour="extension-title">
            &nbsp;
            {activity.name}
          </h3>
          <hr />
          <h4 className="font-medium-5">Observación del trabajdor</h4>
          <p>{comment || 'Sin observaciones'}</p>
          <h4 className="font-medium-5">Observación del Jéfe de área</h4>
          <p>{chief_comment || 'Sin observaciones'}</p>
          <h4 className="font-medium-5 mb-4">Medidas de control que fallaron</h4>
          <Row className="d-flex flex-wrap justify-content-start">
            {
              data ? (
                <>
                  {failure.map((item) => (
                    <div className="d-flex flex-wrap justify-content-center col-sm-6 col-lg-2">
                      <img src={item.image} className="rounded img-thumbnail" alt={item.name} style={{ width: '100px' }} />
                      <h1 className="w-100 text-center mt-1" style={{ fontSize: '0.8rem' }}>{item.name}</h1>
                    </div>
                  ))}
                </>
              ) : (
                <h4>Sin medidas fallidas</h4>
              )
            }
          </Row>
        </CardBody>

      </Card>
    </>
  )
}

export default SupervisionDetailUI
