import React, { useEffect } from 'react'
import {
  Card, CardBody, Col, Row, Button,
} from 'reactstrap'
import { CustomSelect } from '../../../components/custom/standaloneInputs'
import FormGroup from '../../../components/custom/standaloneInputs'

const StandaloneForm = (props) => {
  const { search, areas, employees, workstations, filter, filterEmployees, filterWorkstations, loadingAreas, loadingEmployees, loadingWorkstations } = props
  console.log(`search`, search)
  const areasList = areas.data.data.map((el) => ({ label: el.name, value: el.id }))
  const employeesList = employees.data.map((el) => ({ label: `${el.name + ' ' + el.lastname}`, value: el.id }))
  const workstationsList = workstations.data.data.map((el) => ({ label: el.name, value: el.id }))
  areasList.push({ label: 'Todas', value: '_all_' })
  employeesList.push({ label: 'Todos', value: '_all_' })
  workstationsList.push({ label: 'Todos', value: '_all_' })
  useEffect(() => {
    localStorage.setItem('area_id', '_all_')
    localStorage.setItem('workstation_id', '_all_')
    localStorage.setItem('employed_id', '_all_')
    return () => {
      localStorage.removeItem('area_id')
      localStorage.removeItem('workstation_id')
      localStorage.removeItem('employed_id')
    }
  }, [])
  return (
    <Card>
      <CardBody>
        <Row>
          <Col sm="2" className="d-flex justify-content-center items-align-center">Fecha Inicial</Col>
          <Col sm="2" className="d-flex justify-content-center items-align-center">Fecha termino</Col>
          <Col sm="2" className="d-flex justify-content-center items-align-center">
            <FormGroup
              title="Areas"
              input="CustomSelect"
              name="area_id"
              options={areasList}
              value="_all_"
              search={search}
              filter={filter}
              filterWorkstations={filterWorkstations}
              filterEmployees={filterEmployees}
            />
          </Col>
          <Col sm="2" className="d-flex justify-content-center items-align-center">
            <FormGroup
              title="Puestos de trabajo"
              input="CustomSelect"
              name="workstation_id"
              options={workstationsList}
              value="_all_"
              isLoading={loadingEmployees}
            />
          </Col>
          <Col sm="2" className="d-flex justify-content-center items-align-center">
            <FormGroup
              title="Trabajadores"
              input="CustomSelect"
              name="employed_id"
              options={employeesList}
              value="_all_"
              isLoading={loadingWorkstations}
            />
          </Col>
          <Col sm="2" className="d-flex justify-content-center items-align-center">botton</Col>
        </Row>
      </CardBody>
    </Card>

  )
}

export default StandaloneForm
