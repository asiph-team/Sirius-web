import React, { useEffect, useState } from 'react'
import {
  Card, CardBody, Row, Col, Button,
} from 'reactstrap'
import { Calendar, ChevronDown } from 'react-feather'
import Select from 'react-select'
import DatePicker, { registerLocale } from 'react-datepicker'
import { es } from 'date-fns/locale'
import moment from 'moment'
import { Can, Indicators } from '../../../components/custom'
import { singleDateFormatter } from '../../../utility/helpers/functions'

registerLocale('es', es)
const DashboardUI = (props) => {
  const { performance, indicatorsParams, areas, temp } = props
  const { items } = areas
  const todayInitial = moment(new Date(), 'YYYY-MM-DD').toDate()
  const todayEnd = new Date()
  const [dateStart, setDateStart] = useState((temp != null) ? moment(temp.dateStart, 'YYYY-MM-DD').toDate() : todayInitial.setDate(todayInitial.getDate() - 30))
  const [dateEnd, setDateEnd] = useState((temp != null) ? moment(temp.dateEnd, 'YYYY-MM-DD').toDate() : todayEnd.setDate(todayEnd.getDate() - 1))
  const [indicators, setIndicators] = useState({})
  const [areasId, setAreasId] = useState((temp != null && temp.area != null) ? temp.area : '')
  const { data } = performance
  const activityRisk = { acceptable: 25, alert: 62, unacceptable: 13 }
  const options = items ? items.data.data.map((item) => ({ label: item.name, value: item.id, indicators: item.indicators })).sort((a, b) => { return a.label > b.label ? 1 : -1 }) : null
  if (options) { options.push({ label: 'Todas las Areas', value: null }) }
  const DateCustomInput = ({ value, onClick }) => (
    <h4 className="cursor-pointer" onClick={onClick}>
      {value}
      <ChevronDown className="ml-1" size={14} />
    </h4>
  )
  useEffect(() => {
    if (!temp) {
      indicatorsParams({ dateStart: singleDateFormatter(dateStart, 'YYYY-MM-DD'), dateEnd: singleDateFormatter(dateEnd, 'YYYY-MM-DD') })
    }
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
                      locale="es"
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
                      customInput={<DateCustomInput />}
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <Calendar size={40} className="primary" />
                  <div className="mx-1">
                    <h4 className="primary mb-0 font-weight-bold">Fecha Término</h4>
                    <DatePicker
                      locale="es"
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
                      customInput={<DateCustomInput />}
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="6" sm="12">
            <Card>
              <CardBody className="d-flex justify-content-between">
                <Col sm="10" lg="9">
                  <Select
                    className="w-full"
                    classNamePrefix="select"
                    name="areas-list"
                    options={options}
                    isSearchable
                    placeholder="Todas las Areas"
                    defaultValue={options && options.find((option) => (option.value === areasId) || (option.label === areasId))}
                    onChange={(e) => setAreasId(e.value)}
                    isMulti={false}
                  />
                </Col>
                <Col sm="2" lg="3" className="d-flex flex-row-reverse">
                  <Button onClick={() => indicatorsParams({ dateStart: singleDateFormatter(dateStart, 'YYYY-MM-DD'), dateEnd: singleDateFormatter(dateEnd, 'YYYY-MM-DD'), area: areasId })} color="primary">Filtrar</Button>
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Can>
      <Can rule="dashboard:chief_of_area">
        <Row>
          <Col lg="12" md="12" sm="12">
            <Card>
              <CardBody className="d-flex justify-content-start p-1">
                <div className="d-flex card-body">
                  <Calendar size={40} className="primary" />
                  <div className="mx-1">
                    <h4 className="primary mb-0 font-weight-bold">Fecha Inicio</h4>
                    <DatePicker
                      locale="es"
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
                      customInput={<DateCustomInput />}
                    />
                  </div>
                </div>
                <div className="d-flex mr-2 card-body">
                  <Calendar size={40} className="primary" />
                  <div className="mx-1">
                    <h4 className="primary mb-0 font-weight-bold">Fecha Término</h4>
                    <DatePicker
                      locale="es"
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
                      customInput={<DateCustomInput />}
                    />
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-end card-body">
                  <div className="mx-1">
                    <Button onClick={() => indicatorsParams({ dateStart: singleDateFormatter(dateStart, 'YYYY-MM-DD'), dateEnd: singleDateFormatter(dateEnd, 'YYYY-MM-DD'), area: areasId })} color="primary">Filtrar</Button>
                  </div>
                </div>
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
