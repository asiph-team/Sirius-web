import React from 'react'
import { Card, CardBody, Progress } from 'reactstrap'

const Indicators = ({ performance }) => {
  const {
    globalPerformance, actionsPlans, trainings, PVE, leadership,
  } = performance
  const indicatorColor = (data) => (data > 50) ? 'success' : 'danger'
  return (
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
          <h4 className="mb-25 primary font-weight-bold">Vigilancia Médica</h4>
          <h4 className={indicatorColor(Math.round(PVE))}>{`${Math.round(PVE)}%`}</h4>
        </div>
        <Progress className="ml-2 mb-2" color={indicatorColor(Math.round(PVE))} value={Math.round(PVE)} />

        <div className="ml-2 d-flex justify-content-between mb-25">
          <h4 className="mb-25 primary font-weight-bold">Supervisión</h4>
          <h4 className={indicatorColor(Math.round(leadership))}>{`${Math.round(leadership)}%`}</h4>
        </div>
        <Progress className="ml-2 mb-2" color={indicatorColor(Math.round(leadership))} value={Math.round(leadership)} />
      </CardBody>
    </Card>
  )
}

export default Indicators
