import React from 'react'
import {
  Card, CardBody, Row, Col, Progress,
} from 'reactstrap'
import Chart from 'react-apexcharts'
import { Calendar } from 'react-feather'
import { Can } from '../../../components/custom'

const DashboardUI = () => (
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
                  <h4 className="primary mb-0 font-weight-bold">Fecha Inicio</h4>
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
      <Row>
        <Col lg="6" md="6" sm="6">
          <Card>
            <CardBody>
              <div className="d-flex justify-content-between mb-25">
                <h4 className="mb-25 primary font-weight-bold">Desempeño Global</h4>
                <h4 className="success">63%</h4>
              </div>
              <Progress className="mb-2" color="success" value="63" />
              <div className="d-flex justify-content-between mb-25">
                <h4 className="mb-25 primary font-weight-bold">Planes de acción</h4>
                <h4 className="success">90%</h4>
              </div>
              <Progress className="mb-2" color="success" value="90" />

              <div className="d-flex justify-content-between mb-25">
                <h4 className="mb-25 primary font-weight-bold">Capacitación</h4>
                <h4 className="danger">10%</h4>
              </div>
              <Progress className="mb-2" color="danger" value="10" />

              <div className="d-flex justify-content-between mb-25">
                <h4 className="mb-25 primary font-weight-bold">PVE</h4>
                <h4 className="success">60%</h4>
              </div>
              <Progress className="mb-2" color="success" value="60" />

              <div className="d-flex justify-content-between mb-25">
                <h4 className="mb-25 primary font-weight-bold">Liderazgo</h4>
                <h4 className="success">90%</h4>
              </div>
              <Progress className="mb-2" color="success" value="90" />
            </CardBody>
          </Card>
        </Col>
        <Col lg="6" md="6" sm="6">
          <Card>
            <CardBody>
              <h4 className="primary font-weight-bold">Riesgo de Actividades</h4>
              <Chart
                options={{
                  chart: {
                    toolbar: {
                      show: false,
                    },
                  },
                  dataLabels: {
                    enabled: false,
                  },
                  legend: { show: false },
                  labels: ['Aceptable', 'Alerta', 'Inaceptable'],
                  colors: ['#06D6A0', '#FFD166', '#EF476F'],
                }}
                series={[24, 63, 13]}
                type="donut"
                height={210}
              />
              <div className="chart-info d-flex justify-content-around mb-1 mt-2">
                <div className="series-info d-flex align-items-center">
                  <div
                    className="bg-success"
                    style={{
                      height: '10px',
                      width: '10px',
                      display: 'inline-block',
                      margin: '0 5px',
                    }}
                  />
                  <span className="text-bold-600 mx-50">Aceptable</span>
                </div>
                <div className="series-info d-flex align-items-center">
                  <div
                    className="bg-warning"
                    style={{
                      height: '10px',
                      width: '10px',
                      display: 'inline-block',
                      margin: '0 5px',
                    }}
                  />
                  <span className="text-bold-600 mx-50">Alerta</span>
                </div>
                <div className="series-info d-flex align-items-center">
                  <div
                    className="bg-danger"
                    style={{
                      height: '10px',
                      width: '10px',
                      display: 'inline-block',
                      margin: '0 5px',
                    }}
                  />
                  <span className="text-bold-600 mx-50">Inaceptable</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Can>
  </>
)

export default DashboardUI
