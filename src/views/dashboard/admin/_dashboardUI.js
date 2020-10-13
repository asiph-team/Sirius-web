import React, { useEffect, useState } from 'react'
import {
  Card, CardBody, Row, Col,
} from 'reactstrap'
import { Calendar } from 'react-feather'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import { Can, Indicators } from '../../../components/custom'
import { singleDateFormatter } from '../../../utility/helpers/functions'

const DashboardUI = ({ performance, queryParams }) => {
  const [dateStart, setDateStart] = useState()
  const [dateEnd, setDateEnd] = useState()
  const [indicators, setIndicators] = useState({})
  const { data } = performance
  const activityRisk = { acceptable: 25, alert: 62, unacceptable: 13 }
  const activityRisk2 = { acceptable: 35, alert: 72, unacceptable: 23 }
  const options = data ? data.map((item) => ({ label: item.name, value: item.id, indicators: item.indicators })) : null

  const handleDate = (date) => {
    setDateEnd(date)
    queryParams(`?date_start=${singleDateFormatter(dateStart, 'YYYY-MM-DD')}&date_end=${singleDateFormatter(dateEnd, 'YYYY-MM-DD')}`)
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
        ...options[0].indicators,
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
                      className="form-control"
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
                    <h4 className="primary mb-0 font-weight-bold">Fecha Término</h4>
                    <DatePicker
                      name="date_start"
                      className="form-control"
                      dateFormat="dd/MM/yyyy"
                      selected={dateEnd}
                      onChange={(date) => handleDate(date)}
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="6" sm="12">
            <Card>
              <CardBody className="w-full flex-wrap">
                <div className="w-1/2 flex flex-wrap">
                  <Select
                    className="w-full"
                    classNamePrefix="select"
                    name="areas-list"
                    options={options}
                    onChange={(option) => handleIndicators(option.indicators)}
                    isSearchable
                    placeholder="Todas las Areas"
                    isMulti={false}
                  />
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
