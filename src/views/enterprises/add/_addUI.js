import React from 'react'
import {
  Button, Card, CardBody, Col, Row,
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import uuid from 'react-uuid'
import { Header, FormGroup } from '../../../components/custom'
import { addEnterpriseSchema } from './_validation'
import { initialValues } from './_initialValues'
import { formConfig } from './_formConfig'

const AddUI = (props) => {
  const { handleSubmit } = props
  return (
    <>
      <Header title="Agregar empresas" icon="Shield" />
      <Card>
        <CardBody>
          <Formik
            initialValues={initialValues}
            validationSchema={addEnterpriseSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({ setFieldValue }) => (
              <Form id="add-enterprises">
                {
                  formConfig.map((row) => (
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
                      <Button color="primary" className="ml-1" type="submit">Agregar</Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </CardBody>
      </Card>
    </>
  )
}

export default AddUI
