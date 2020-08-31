import React from 'react'
import {
  Card, CardBody, Row, Col,
} from 'reactstrap'
import { Calendar } from 'react-feather'
import { Can, Indicators } from '../../../components/custom'

const DashboardUI = ({ performance }) => (
  <>
    <Can rule="dashboard:admin">
      <Row>
        <Col lg="6" md="6" sm="6">
          <Card>
            <CardBody className="d-flex justify-content-between p-1">
              <div className="d-flex">
                <Calendar size={40} className="primary" />
                <div className="mx-1">
                  <h4 className="primary mb-0 font-weight-bold">Fecha Inicio</h4>
                  <h4 className="font-weight-bold">01/09/2020</h4>
                </div>
              </div>
              <div className="d-flex">
                <Calendar size={40} className="primary" />
                <div className="mx-1">
                  <h4 className="primary mb-0 font-weight-bold">Fecha Término</h4>
                  <h4 className="font-weight-bold">01/09/2020</h4>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="6" md="6" sm="6">
          <Card>
            <CardBody className="d-flex align-items-center">
              <h4 className="mb-1 primary">Todas las areas</h4>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Can>
    <Can rule="dashboard:manager">
      <Indicators performance={performance} />
    </Can>
  </>
)

export default DashboardUI
