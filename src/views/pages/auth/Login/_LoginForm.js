import React from 'react'
import { Link } from 'react-router-dom'
import { Button, CardBody, FormGroup, Form, Input, Label } from 'reactstrap'
import { Mail, Lock } from 'react-feather'

const LoginForm = () => {
    return (
        <>
            <CardBody className="pt-1">
                <Form>
                    <FormGroup className="form-label-group position-relative has-icon-left">
                        <Input
                            type="email"
                            placeholder="Correo electrónico"
                            required
                        />
                        <div className="form-control-position">
                            <Mail size={15} />
                        </div>
                        <Label>Correo electrónico</Label>
                    </FormGroup>
                    <FormGroup className="form-label-group position-relative has-icon-left">
                        <Input
                            type="password"
                            placeholder="Contraseña"
                            required
                        />
                        <div className="form-control-position">
                            <Lock size={15} />
                        </div>
                        <Label>Contraseña</Label>
                    </FormGroup>
                    <div className="d-flex justify-content-between">
                        <Button block color="primary" type="submit">
                            Ingresar
                        </Button>
                    </div>
                    <div className="text-center py-1">
                        <Link to="/pages/forgot-password">Recuperar contraseña</Link>
                    </div>
                </Form>
            </CardBody>
        </>
    )
}

export default LoginForm