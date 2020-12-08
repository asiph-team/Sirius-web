import React from 'react'
import {
  Card, CardBody, Col, Row,
} from 'reactstrap'
import { Formik, Form } from 'formik'
import { FormGroup, FormSubmit } from '../../../components/custom'
import { controlsSchema } from './_validation'
import { initialValues } from './_initialValues'
import { config } from './_config'

const FormUI = (props) => {
  const {
    handleSubmit, placeholder, title, options, activity,
  } = props
  const activityId = (placeholder === undefined)
    ? initialValues.activity_id = activity : placeholder.activity_id
  return (
    <Card>
      <CardBody>
        <Formik
          initialValues={placeholder || initialValues}
          validationSchema={controlsSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {() => (
            <Form id="form-controls">
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
              <FormSubmit activityId={activityId} title={title} />
            </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
  )
}

export default FormUI
