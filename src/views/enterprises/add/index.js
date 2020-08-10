import React from 'react'
import { Button, Card, CardBody, Col, FormGroup, Row } from 'reactstrap'
import {Link} from 'react-router-dom'
import {Header} from '../../../components/custom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import {addEnterpriseSchema} from './_validation'
import {values} from './_initialValues'

const Add = () => (
    <>
        <Header title="Agregar empresas" icon="Shield"/>
        <Card>
            <CardBody>
                <Formik
                    intialValues={values}
                    validationSchema={addEnterpriseSchema}
                    render={({errors, touched}) => (
                        <Form>
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
                                        <Field
                                            className="form-control"
                                            name="phone"
                                            type="number"
                                        />
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
                                        <Field
                                            className="form-control"
                                            name="size"
                                            type="text"
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
                                        <Field
                                            className="form-control"
                                            name="CRL"
                                            type="text"
                                        />
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
                                        <Field
                                            className="form-control"
                                            name="CRT"
                                            type="text"
                                        />
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
                                        <Button color="primary" className="ml-1">Agregar</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    )}
                />
            </CardBody>
        </Card>
    </>
)

export default Add;