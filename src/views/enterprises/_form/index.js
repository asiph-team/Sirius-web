import React from 'react'
import {
  Button, Card, CardBody, Col, Row,
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { FormGroup } from '../../../components/custom'
import { enterpriseSchema } from './_validation'
import { initialValues } from './_initialValues'
import { config } from './_config'

const FormUI = (props) => {
  const { handleSubmit, placeholder, title } = props
  return (
    <Card>
      <CardBody>
        <Formik
          initialValues={placeholder || initialValues}
          // validationSchema={enterpriseSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({ setFieldValue }) => (
            <Form id="form-enterprises">
              {
              config.map((row) => (
                <Row key={row[0].key}>
                  {
                    row.map((item) => (
                      <Col sm="6" key={item.key}>
                        <FormGroup {...item} setFieldValue={setFieldValue} />
                      </Col>
                    ))
                  }
                </Row>
              ))
            }
              <Row>
                <Col sm="12 d-flex justify-content-end">
                  <div>
                    <Link to="/dashboard/enterprises"><Button color="light">Cancelar</Button></Link>
                    <Button color="primary" className="ml-1" type="submit">{title}</Button>
                  </div>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
  )
}

export default FormUI
