import React from 'react'
import { Alert, Row } from 'reactstrap'

const Error = props => {
    return (
        <Row className="m-2">
            <Alert color="danger" className="w-100">
                <span>{props.message}</span>
            </Alert>
        </Row>
    )
}

export default Error