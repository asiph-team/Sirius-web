import React from 'react'
import {
  Card, CardBody, Col, Row,
} from 'reactstrap'
import { Formik, Form } from 'formik'
import { FormGroup, FormSubmit } from '../../../components/custom'
import { areaSchema } from './_validation'
import { initialValues } from './_initialValues'
import { config } from './_config'
import { urlApi } from '../../../utility/helpers/consts'

const FormUI = (props) => {
  const url = `${urlApi}/api/v1/areas`
  const {
    handleSubmit, placeholder, title, options,
  } = props
  return (
    <Card>
      <CardBody>
        <Formik
          initialValues={placeholder || initialValues}
          validationSchema={areaSchema}
          onSubmit={(values) => handleSubmit({ name: values.name, description: values.description, chief_areas_id: values.chief_areas_id }, `${urlApi}/api/v1/areas/${values.id}`)}
        >
          {() => (
            <Form id="form-areas">
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
              <FormSubmit back="/dashboard/areas" title={title} />
            </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
  )
}

export default FormUI
