import React from 'react'
import Chart from 'react-apexcharts'
import {
  Card, CardBody, Row, Col, Progress,
} from 'reactstrap'

const Indicators = ({ performance }) => {
  const {
    globalPerformance, actionsPlans, trainings, PVE, leadership, activityRisk,
  } = performance
  const indicatorColor = (data) => (data > 50) ? 'success' : 'danger'
  return (
    <Row>
      <Col lg="6" md="6" sm="6">
        <Card>
          <CardBody>
            <div className="d-flex justify-content-between mb-25 mt-2">
              <h4 className="mb-25 primary font-weight-bold">Desempeño Global</h4>
              <h4 className={indicatorColor(Math.round(globalPerformance))}>{`${Math.round(globalPerformance)}%`}</h4>
            </div>
            <Progress className="mb-2 progress-md" color={indicatorColor(Math.round(globalPerformance))} value={Math.round(globalPerformance)} />
            <div className="ml-2 d-flex justify-content-between mb-25">
              <h4 className="mb-25 primary font-weight-bold">Planes de acción</h4>
              <h4 className={indicatorColor(Math.round(actionsPlans))}>{`${Math.round(actionsPlans)}%`}</h4>
            </div>
            <Progress className="ml-2 mb-2" color={indicatorColor(Math.round(actionsPlans))} value={Math.round(actionsPlans)} />

            <div className="ml-2 d-flex justify-content-between mb-25">
              <h4 className="mb-25 primary font-weight-bold">Capacitación</h4>
              <h4 className={indicatorColor(Math.round(trainings))}>{`${Math.round(trainings)}%`}</h4>
            </div>
            <Progress className="ml-2 mb-2" color={indicatorColor(Math.round(trainings))} value={Math.round(trainings)} />

            <div className="ml-2 d-flex justify-content-between mb-25">
              <h4 className="mb-25 primary font-weight-bold">VM</h4>
              <h4 className={indicatorColor(Math.round(PVE))}>{`${Math.round(PVE)}%`}</h4>
            </div>
            <Progress className="ml-2 mb-2" color={indicatorColor(Math.round(PVE))} value={Math.round(PVE)} />

            <div className="ml-2 d-flex justify-content-between mb-25">
              <h4 className="mb-25 primary font-weight-bold">Liderazgo</h4>
              <h4 className={indicatorColor(Math.round(leadership))}>{`${Math.round(leadership)}%`}</h4>
            </div>
            <Progress className="ml-2 mb-2" color={indicatorColor(Math.round(leadership))} value={Math.round(leadership)} />
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
                  enabled: true,
                  formatter: (val) => `${val}%`,
                },
                legend: { show: false },
                labels: ['Aceptable', 'Alerta', 'Crítico'],
                colors: ['#06D6A0', '#FFD166', '#EF476F'],
              }}
              series={[activityRisk.acceptable, activityRisk.alert, activityRisk.unacceptable]}
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
                <span className="text-bold-600 mx-50">Crítico</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default Indicators
