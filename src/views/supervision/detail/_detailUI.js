import React from 'react'
import { Card, CardBody, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { ChevronLeft } from 'react-feather'
import { Header } from '../../../components/custom'

const SupervisionDetailUI = (props) => {
  const { controlMeasure, data } = props
  const { activity, comment, chief_comment } = controlMeasure
  return (
    <>
      <Header title="Detalle de supervisión" icon="Eye">
        <Link to="/dashboard/supervision">
          <Button size="" color="primary" className="my-1">
            <ChevronLeft size={14} />
                &nbsp;Volver
          </Button>
        </Link>
      </Header>
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
              data && (
                <>
                  {data.data.data.map((item) => (
                    <div className="d-flex flex-wrap justify-content-center col-sm-6 col-lg-2">
                      <img src={item.image} className="rounded img-thumbnail" alt={item.name} style={{ width: '100px' }} />
                      <h1 className="w-100 text-center mt-1" style={{ fontSize: '0.8rem' }}>{item.name}</h1>
                    </div>
                  ))}
                </>
              )
            }
          </Row>
        </CardBody>

      </Card>
    </>
  )
}

export default SupervisionDetailUI
