import React from 'react'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap'
import { history } from '../../../history'
import '../../../assets/scss/pages/authentication.scss'

const Reset = () => (
  <Row className="m-0 justify-content-center">
    <Col lg="4" md="5" sm="7" xs="10" className="d-flex justify-content-center">
      <Card className="bg-authentication login-card rounded-0 mb-0 w-100">
        <Row className="m-0">
          <Col className="p-0">
            <Card className="rounded-0 mb-0 px-2">
              <CardHeader className="justify-content-center text-center">
                <CardTitle><h4 className="mb-1">Recuperar contraseña</h4></CardTitle>
                <p className="px-2 auth-title">
                  Ingresa tu dirección de correo electrónico y te enviaremos
                  las instrucciones para recuperar tu contraseña.
                </p>
              </CardHeader>
              <CardBody className="pt-0 pb-0">
                <Form>
                  <FormGroup className="form-label-group">
                    <Input type="text" placeholder="Correo electrónico" required />
                    <Label>Correo electrónico</Label>
                  </FormGroup>
                  <div className="float-md-left d-block mb-1">
                    <Button
                      color="primary"
                      outline
                      className="px-75 btn-block"
                      onClick={() => history.push('/')}
                    >
                      Volver
                    </Button>
                  </div>
                  <div className="float-md-right d-block mb-1">
                    <Button
                      color="primary"
                      className="px-75 btn-block"
                      onClick={() => history.push('/')}
                    >
                      Enviar enlace
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Card>
    </Col>
  </Row>
)

export default Reset
