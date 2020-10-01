import React from 'react'
import {
  Card, CardBody, Col, Row,
} from 'reactstrap'
import { Formik, Form } from 'formik'
import { FormGroup, FormSubmit } from '../../../components/custom'
import { trainingSchema } from './_validation'
import { initialValues } from './_initialValues'

const FormUI = (props) => {
  const {
    handleSubmit, placeholder, title, options, config
  } = props
  return (
    <Card>
      <CardBody>
        <Formik
          initialValues={placeholder || initialValues}
          validationSchema={trainingSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {() => (
            <Form id="form-trainings">
              {
              config.map((row) => (
                <Row key={row[0].key}>
                  {
                    row.map((item) => {
                      if (options && item.options) {
                        Object.assign(item, { ...item, options })
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
              <FormSubmit back="/dashboard/trainings" title={title} />
            </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
  )
}

export default FormUI
