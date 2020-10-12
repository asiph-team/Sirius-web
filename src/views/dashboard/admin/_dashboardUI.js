import React, { useEffect, useState } from 'react'
import {
  Card, CardBody, Row, Col, FormGroup
} from 'reactstrap'
import { Calendar } from 'react-feather'
import { Can, Indicators } from '../../../components/custom'
import Select from 'react-select'

const DashboardUI = ({ performance }) => {
  const [indicators, setindicators] = useState({})
  const { data } = performance
  const activityRisk = {
    acceptable: 25,
    alert: 62,
    unacceptable: 13,
  }
  const options = data ? data.map((item) => ({ label: item.name, value: item.id, indicators: item.indicators })) : null
  const handleIndicators = () => {

  }
  useEffect(() => {
    setindicators({ ...options[0].indicators, ...activityRisk })
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
          <Col lg="6" md="6" sm="12">
            <Card>
              <CardBody className="w-full flex-wrap">
                {/* <div className="flex flex-wrap">
                  <div className="mx-1">
                    <h4 className="mb-1 primary">Todas las areas</h4>
                  </div>
                </div> */}
                <div className="w-1/2 flex flex-wrap">
                  <Select
                    className="w-full"
                    classNamePrefix="select"
                    name="areas-list"
                    options={options}
                    //onChange={(option) => option && form.setFieldValue(name, option.value)}
                    //defaultValue={options.find((option) => (option.value === value) || (option.label === value))}
                    isSearchable
                    placeholder="Todas las Areas"
                    isMulti={false}
                  />
                </div>
              </CardBody>
              {/* <CardBody className="flex flex-wrap w-full">
                <div className="w-1/2 flex flex-wrap border border-red">
                  <h4 className="mb-1 primary">Todas las areas</h4>
                </div>
                <div className="w-1/2 flex flex-wrap">
                  <Select
                    className="w-full"
                    classNamePrefix="select"
                    name="areas-list"
                    options={options}
                    //onChange={(option) => option && form.setFieldValue(name, option.value)}
                    //defaultValue={options.find((option) => (option.value === value) || (option.label === value))}
                    isSearchable
                    placeholder="Todas las Areas"
                    isMulti={false}
                  />
                </div>



              </CardBody> */}
            </Card>
          </Col>
        </Row>
      </Can>
      <Can rule="dashboard:manager">
        <Indicators performance={indicators} />
      </Can>
    </>
  )
}

export default DashboardUI
