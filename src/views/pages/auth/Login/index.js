import React from 'react'
import {
    Card,
    CardHeader,
    CardTitle,
    Col,
    Row
} from 'reactstrap'
import '../../../../assets/scss/pages/authentication.scss'
import logoImg from '../../../../assets/img/logo/logo-brand.png'
import LoginForm from './_LoginForm'

const Login = () => (
    <Row className="m-0 justify-content-center">
        <Col lg="4" md="5" sm="7" xs="10" className="d-flex justify-content-center">
            <Card className="bg-authentication login-card rounded-0 mb-0 w-100">
                <Row className="m-0">
                    <Col className="p-0">
                        <Card className="rounded-0 mb-0 px-2">
                            <CardHeader className="justify-content-center text-center">
                                <CardTitle><img src={logoImg} alt="logo" className="login-brand" /></CardTitle>
                            </CardHeader>
                            <LoginForm />
                        </Card>
                    </Col>
                </Row>
            </Card>
        </Col>
    </Row>
);

export default Login