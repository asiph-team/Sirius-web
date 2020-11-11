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
  const todayInitial = new Date()
  const todayEnd = new Date()
  const [dateStart, setDateStart] = useState(todayInitial.setDate(todayInitial.getDate() - 30))
  const [dateEnd, setDateEnd] = useState(todayEnd.setDate(todayEnd.getDate() - 1))
  const [indicators, setIndicators] = useState({})
  const [areasId, setAreasId] = useState('')
  const [showDateStart, setShowDateStart] = useState(false)
  const { data } = performance
  const activityRisk = { acceptable: 25, alert: 62, unacceptable: 13 }
  const activityRisk2 = { acceptable: 35, alert: 72, unacceptable: 23 }
  const options = items ? items.data.data.map((item) => ({ label: item.name, value: item.id, indicators: item.indicators })).sort((a, b) => { return a.label > b.label ? 1 : -1 }) : null

  const ExampleCustomInput = ({ value, onClick }) => (
    <h4 className="cursor-pointer" onClick={onClick}>
      {value}
    </h4>
  )
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
                      dateFormat="dd/MM/yyyy"
                      className="form-control"
                      selected={dateStart}
                      autoComplete="off"
                      onChange={(date) => {
                        setDateStart(date)
                      }}
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                      customInput={<ExampleCustomInput />}
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <Calendar size={40} className="primary" />
                  <div className="mx-1">
                    <h5 className="primary mb-0">Fecha Término</h5>
                    <DatePicker
                      name="date_end"
                      dateFormat="dd/MM/yyyy"
                      className="form-control"
                      selected={dateEnd}
                      autoComplete="off"
                      onChange={(date) => {
                        setDateEnd(date)
                      }}
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                      customInput={<ExampleCustomInput />}
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
