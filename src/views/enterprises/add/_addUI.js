import React from 'react'
import {
  Button, Card, CardBody, Col, FormGroup, Input, InputGroup, InputGroupAddon, Row,
} from 'reactstrap'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik'
import { Header } from '../../../components/custom'
import { addEnterpriseSchema } from './_validation'
import { initialValues, options } from './_initialValues'

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
                <Row>
                  <Col sm="6">
                    <FormGroup>
                      <label htmlFor="name">Nombre o razón social</label>
                      <Field
                        className="form-control"
                        name="name"
                        type="text"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="field-error text-danger"
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <label htmlFor="spin">Giro</label>
                      <Field
                        className="form-control"
                        name="spin"
                        type="text"
                      />
                      <ErrorMessage
                        name="spin"
                        component="div"
                        className="field-error text-danger"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm="6">
                    <FormGroup>
                      <label htmlFor="heading">Rubro</label>
                      <Field
                        className="form-control"
                        name="heading"
                        type="text"
                      />
                      <ErrorMessage
                        name="heading"
                        component="div"
                        className="field-error text-danger"
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <label htmlFor="address">Dirección</label>
                      <Field
                        className="form-control"
                        name="address"
                        type="text"
                      />
                      <ErrorMessage
                        name="address"
                        component="div"
                        className="field-error text-danger"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm="6">
                    <FormGroup>
                      <label htmlFor="RUT">RUT</label>
                      <Field
                        className="form-control"
                        name="RUT"
                        type="text"
                      />
                      <ErrorMessage
                        name="RUT"
                        component="div"
                        className="field-error text-danger"
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <label htmlFor="phone">Teléfono contacto</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">+569</InputGroupAddon>
                        <Input name="phone" tag={Field} />
                      </InputGroup>
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="field-error text-danger"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm="6">
                    <FormGroup>
                      <label htmlFor="email">Email</label>
                      <Field
                        className="form-control"
                        name="email"
                        type="email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="field-error text-danger"
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <label htmlFor="size">Tamaño</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isClearable
                        isSearchable
                        name="size"
                        tag={Field}
                        options={options}
                        onChange={(option) => setFieldValue('size', option.value)}
                        placeholder=""
                      />
                      <ErrorMessage
                        name="size"
                        component="div"
                        className="field-error text-danger"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm="6">
                    <FormGroup>
                      <label htmlFor="RL">Representante legal</label>
                      <Field
                        className="form-control"
                        name="RL"
                        type="text"
                      />
                      <ErrorMessage
                        name="RL"
                        component="div"
                        className="field-error text-danger"
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <label htmlFor="CRL">Contacto representante legal</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">+569</InputGroupAddon>
                        <Input name="CRL" tag={Field} />
                      </InputGroup>
                      <ErrorMessage
                        name="CRL"
                        component="div"
                        className="field-error text-danger"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm="6">
                    <FormGroup>
                      <label htmlFor="RT">Representante técnico</label>
                      <Field
                        className="form-control"
                        name="RT"
                        type="text"
                      />
                      <ErrorMessage
                        name="RT"
                        component="div"
                        className="field-error text-danger"
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <label htmlFor="CRT">Contacto representante técnico</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">+569</InputGroupAddon>
                        <Input name="CRT" tag={Field} />
                      </InputGroup>
                      <ErrorMessage
                        name="CRT"
                        component="div"
                        className="field-error text-danger"
                      />
                    </FormGroup>
                  </Col>
                </Row>
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
