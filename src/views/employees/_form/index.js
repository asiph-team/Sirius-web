import React from 'react'
import { Col, Row } from 'reactstrap'
import { Formik, Form } from 'formik'
import { FormGroup, FormSubmit } from '../../../components/custom'
import { workstationSchema } from './_validation'
import { initialValues } from './_initialValues'
import { config } from './_config'

const FormUI = (props) => {
  const {
    handleSubmit, placeholder, title, options, onClose, back,
  } = props
  return (
    <Formik
      initialValues={placeholder || initialValues}
      validationSchema={workstationSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      {() => (
        <Form id="form-employees">
          {
            config.map((row) => (
              <Row key={row[0].key}>
                {
                  row.map((item) => {
                    if (options && item.options && item.name === 'workstation_id') {
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
          <FormSubmit onClose={onClose} back={back} title={title} />
        </Form>
      )}
    </Formik>
  )
}

export default FormUI
