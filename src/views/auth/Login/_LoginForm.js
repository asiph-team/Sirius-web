import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Button, CardBody, FormGroup, Form, Input, Label, Spinner, UncontrolledAlert,
} from 'reactstrap'
import { Mail, Lock } from 'react-feather'

const LoginForm = (props) => {
  const { loading, error } = props
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <>
      <CardBody className="pt-1">
        <Form onSubmit={(e) => {
          e.preventDefault()
          props.handleLogin({ email, password })
        }}
        >
          <FormGroup className="form-label-group position-relative has-icon-left">
            <Input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="form-control-position">
              <Lock size={15} />
            </div>
            <Label>Contraseña</Label>
          </FormGroup>
          {error && <UncontrolledAlert style={{ fontSize: 12 }} color="danger">{error}</UncontrolledAlert>}
          <div className="d-flex justify-content-between">
            <Button block color="primary" type="submit">
              {loading ? <Spinner size="sm" color="light" /> : 'Ingresar'}
            </Button>
          </div>
          <div className="text-center py-1">
            <Link to="forgot-password">Recuperar contraseña</Link>
          </div>
        </Form>
      </CardBody>
    </>
  )
}

export default LoginForm
