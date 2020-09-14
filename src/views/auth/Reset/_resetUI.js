import React from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Row,
} from 'reactstrap'
import FormUI from './_form'

const ResetUI = (props) => {
  const { handleSubmit } = props
  return (
    <Row className="m-0 justify-content-center">
      <Col lg="4" md="5" sm="7" xs="10" className="d-flex justify-content-center">
        <Card className="bg-authentication login-card rounded-0 mb-0 w-100">
          <Row className="m-0">
            <Col className="p-0">
              <Card className="rounded-0 mb-0 p-2">
                <CardHeader className="justify-content-center text-center">
                  <CardTitle><h4 className="mb-1">Recuperar contraseña</h4></CardTitle>
                  <p className="px-2 auth-title">
                    Ingresa tu dirección de correo electrónico y te enviaremos
                    las instrucciones para recuperar tu contraseña.
                  </p>
                </CardHeader>
                <CardBody className="pt-0 pb-0">
                  <FormUI handleSubmit={handleSubmit} title="Enviar enlace" />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>

  )
}

export default ResetUI
