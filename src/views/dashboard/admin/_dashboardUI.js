import React, { useEffect, useState } from 'react'
import {
  Card, CardBody, Row, Col, Button,
} from 'reactstrap'
import { Calendar } from 'react-feather'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import { Can, Indicators } from '../../../components/custom'
import { singleDateFormatter } from '../../../utility/helpers/functions'

const DashboardUI = (props) => {
  const { performance, queryParams, areas } = props
  const { items } = areas
  console.log('areas', items.data.data)
  const [dateStart, setDateStart] = useState()
  const [dateEnd, setDateEnd] = useState()
  const [indicators, setIndicators] = useState({})
  const [areasId, setAreasId] = useState('')
  const [showDateStart, setShowDateStart] = useState(false)
  const { data } = performance
  const activityRisk = { acceptable: 25, alert: 62, unacceptable: 13 }
  const activityRisk2 = { acceptable: 35, alert: 72, unacceptable: 23 }
  const options = items ? items.data.data.map((item) => ({ label: item.name, value: item.id, indicators: item.indicators })).sort((a, b) => { return a.label > b.label ? 1 : -1 }) : null

  const handleFilter = (date) => {
    setDateEnd(date)
    queryParams(
      `?date_start=${singleDateFormatter(dateStart, 'YYYY-MM-DD')}&date_end=${singleDateFormatter(dateEnd, 'YYYY-MM-DD')}&areas_id=${areasId}`)
  }
  const handleIndicators = (values) => {
    setIndicators(
      {
        ...values,
        activityRisk: activityRisk2,
      },
    )
  }
  useEffect(() => {
    setIndicators(
      {
        ...data,
        activityRisk,
      },
    )
  }, [])
  return (
    <>
      <Can rule="dashboard:admin">
        <Row>
          <Col lg="6" md="6" sm="12">
            <Card>
              <CardBody className="d-flex justify-content-between p-1">
                <div className="d-flex">
                  <Calendar size={40} className="primary" />
                  <div className="mx-1">
                    <h4 className="primary mb-0 font-weight-bold">Fecha Inicio</h4>
                    <DatePicker
                      name="date_start"
                      className={showDateStart ? '' : 'hide'}
                      dateFormat="dd/MM/yyyy"
                      selected={dateStart}
                      onChange={(date) => {
                        setDateStart(date)
                      }}
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <Calendar size={40} className="primary" />
                  <div className="mx-1">
                    <h5 className="primary mb-0">Fecha Término</h5>
                    <DatePicker
                      name="date_start"
                      className="form-control"
                      dateFormat="dd/MM/yyyy"
                      selected={dateEnd}
                      onChange={(date) => setDateEnd(date)}
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="6" sm="12">
            <Card>
              <CardBody className="d-flex justify-content-between p-1">
                <Col sm="10" lg="8">
                  <Select
                    className="w-full"
                    classNamePrefix="select"
                    name="areas-list"
                    options={options}
                    isSearchable
                    placeholder="Todas las Areas"
                    onChange={(e) => setAreasId(e.value)}
                    isMulti={false}
                  />
                </Col>
                <Col sm="2" lg="4" className="d-flex align-items-end">
                  <Button onClick={() => handleFilter()} color="primary">Filtrar</Button>
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Can>
      <Can rule="dashboard:manager">
        {
          indicators.activityRisk && (
            <Indicators performance={indicators} />
          )
        }
      </Can>
    </>
  )
}

export default DashboardUI
