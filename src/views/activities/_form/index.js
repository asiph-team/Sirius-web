import React from 'react'
import {
  Card, CardBody, Col, Row,
} from 'reactstrap'
import { Formik, Form } from 'formik'
import { FormGroup, FormSubmit } from '../../../components/custom'
import { workstationSchema } from './_validation'
import { initialValues } from './_initialValues'
import { config } from './_config'

const FormUI = (props) => {
  const {
    handleSubmit, placeholder, title, options, risks,
  } = props
  const orderedRisks = risks.sort((a, b) => { return a.name > b.name ? 1 : -1 })
  return (
    <Card>
      <CardBody>
        <Formik
          initialValues={placeholder || initialValues}
          validationSchema={workstationSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {() => (
            <Form id="form-activities">
              {
              config.map((row) => (
                <Row key={row[0].key}>
                  {
                    row.map((item) => {
                      if (options && item.options && item.name === 'workstation') {
                        Object.assign(item, { ...item, options })
                      }
                      if (item.name === 'risks_id') {
                        Object.assign(item, { ...item, options: orderedRisks })
                      }
                      return (
                        <Col sm={item.grid} key={item.key}>
                          <FormGroup {...item} />
                        </Col>
                      )
                    })
                  }
                </Row>
              ))
            }
              <FormSubmit back="/dashboard/activities" title={title} />
            </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
  )
}

export default FormUI
