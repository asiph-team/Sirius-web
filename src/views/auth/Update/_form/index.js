import React from 'react'
import { Col, Row } from 'reactstrap'
import { Formik, Form } from 'formik'
import { FormGroup, FormSubmit } from '../../../../components/custom'
import { enterpriseSchema } from './_validation'
import { initialValues } from './_initialValues'
import { config } from './_config'

const FormUI = (props) => {
  const {
    handleSubmit, placeholder, title, userData,
  } = props
  initialValues.email = userData.email
  return (
    <Formik
      initialValues={placeholder || initialValues}
      validationSchema={enterpriseSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      {() => (
        <Form id="form-update-password">
          {
            config.map((row) => (
              <Row key={row[0].key}>
                {
                  row.map((item) => (
                    <Col sm={item.grid} key={item.key}>
                      <FormGroup {...item} />
                    </Col>
                  ))
                }
              </Row>
            ))
          }
          <FormSubmit back="/" title={title} />
        </Form>
      )}
    </Formik>
  )
}

export default FormUI
