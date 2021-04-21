import React from 'react'
import {
  Card, CardBody, Col, Row, Button,
} from 'reactstrap'
import { FileText } from 'react-feather'
import { Formik, Form } from 'formik'
import moment from 'moment'
import { FormGroup } from '../../../../components/custom'
import { initialValues } from './_initialValues'
import { config } from './_config'
import { validationSchema } from './_validation'
import { userData } from '../../../../utility/helpers/functions'

const FormUI = (props) => {
  const {
    handleSubmit, placeholder, areas, search, employees, workstations, filter, filterEmployees, filterWorkstations, loadingAreas, loadingEmployees, loadingWorkstations
  } = props
  const { role } = userData()
  const areas_list = areas.data.map((el) => ({ label: el.name, value: el.id }))
  const employees_list = employees.data.map((el) => ({ label: `${el.name + ' ' + el.lastname}`, value: el.id }))
  const workstations_list = workstations.data.data.map((el) => ({ label: el.name, value: el.id }))
  if (role !== 'chief_of_area') {
    areas_list.push({ label: 'Todas', value: '_all_' })
  }
  employees_list.push({ label: 'Todos', value: '_all_' })
  workstations_list.push({ label: 'Todos', value: '_all_' })
  placeholder.date_start = moment(placeholder.date_start).toDate()
  placeholder.date_end = moment(placeholder.date_end).toDate()
  return (
    <Card>
      <CardBody>
        <Formik
          enableReinitialize
          initialValues={placeholder || initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {() => (
            <Form id="form-trainings">
              {
                config.map((row) => (
                  <Row key={row[0].key}>
                    {
                      row.map((item) => {
                        if (item.name === 'date_start') {
                          Object.assign(item, {
                            ...item,
                            search,
                            filter,
                            filterEmployees,
                            filterWorkstations,
                          })
                        }
                        if (item.name === 'date_end') {
                          Object.assign(item, {
                            ...item,
                            search,
                            filter,
                            filterEmployees,
                            filterWorkstations,
                          })
                        }
                        if (item.name === 'area_id') {
                          Object.assign(item, {
                            ...item,
                            options: areas_list,
                            search,
                            filter,
                            filterEmployees,
                            filterWorkstations,
                            disabled: role === 'chief_of_area',
                          })
                        }
                        if (item.name === 'workstation_id') {
                          Object.assign(item, {
                            ...item,
                            options: workstations_list,
                            search,
                            filter,
                            filterEmployees,
                            isLoading: loadingWorkstations,
                          })
                        }
                        if (item.name === 'employed_id') {
                          Object.assign(item, {
                            ...item,
                            options: employees_list,
                            search,
                            filter,
                            isLoading: loadingEmployees,
                          })
                        }
                        return (
                          <Col sm={item.grid} key={item.key}>
                            <FormGroup {...item} />
                          </Col>
                        )
                      })
                    }
                    <Col sm="2" className="d-flex justify-content-center align-items-center">
                      <Button type="submit" color="primary" className="d-flex justify-content-center items-align-center" style={{ height: '35px' }}>
                        <FileText size={14} />
                        &nbsp; Exportar
                      </Button>
                    </Col>
                  </Row>
                ))
              }
            </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
  )
}
export default FormUI
