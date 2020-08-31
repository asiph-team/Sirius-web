import React from 'react'
import Chart from 'react-apexcharts'
import {
  Card, CardBody, Row, Col, Progress,
} from 'reactstrap'

const Indicators = ({ performance }) => {
  const {
    globalPerformance, actionsPlans, trainings, PVE, leadership, activityRisk,
  } = performance
  return (
    <Row>
      <Col lg="6" md="6" sm="6">
        <Card>
          <CardBody>
            <div className="d-flex justify-content-between mb-25">
              <h4 className="mb-25 primary font-weight-bold">Desempeño Global</h4>
              <h4 className="success">{`${globalPerformance}%`}</h4>
            </div>
            <Progress className="mb-2" color="success" value={globalPerformance} />
            <div className="d-flex justify-content-between mb-25">
              <h4 className="mb-25 primary font-weight-bold">Planes de acción</h4>
              <h4 className="success">{`${actionsPlans}%`}</h4>
            </div>
            <Progress className="mb-2" color="success" value={actionsPlans} />

            <div className="d-flex justify-content-between mb-25">
              <h4 className="mb-25 primary font-weight-bold">Capacitación</h4>
              <h4 className="danger">{`${trainings}%`}</h4>
            </div>
            <Progress className="mb-2" color="danger" value={trainings} />

            <div className="d-flex justify-content-between mb-25">
              <h4 className="mb-25 primary font-weight-bold">PVE</h4>
              <h4 className="success">{`${PVE}%`}</h4>
            </div>
            <Progress className="mb-2" color="success" value={PVE} />

            <div className="d-flex justify-content-between mb-25">
              <h4 className="mb-25 primary font-weight-bold">Liderazgo</h4>
              <h4 className="success">{`${leadership}%`}</h4>
            </div>
            <Progress className="mb-2" color="success" value={leadership} />
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
                <span className="text-bold-600 mx-50">Inaceptable</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default Indicators
