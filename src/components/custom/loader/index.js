import React from 'react'
import { Row, Col, Spinner } from 'reactstrap'

const Loader = () => {
    return (
        <Row className="m-2">
            <Col xs="12" className="d-flex align-items-center justify-content-center">
                <Spinner type="grow" color="grey" />
            </Col>
        </Row>
    )
}

export default Loader