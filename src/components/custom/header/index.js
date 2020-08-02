import React from 'react'
import { Row, Col } from 'reactstrap'
import * as Icon from 'react-feather'

const Header = props => {
    const { icon, title, children } = props
    const IconTag = Icon[icon]
    return (
        <Row className="mb-2">
            <Col sm="6" className="ml-50 d-flex align-items-center">
                <IconTag size={20}/>
                <p className="font-medium-5 mt-1 extension-title" data-tour="extension-title">&nbsp;{title}</p>
            </Col>
            <Col sm="6" className="ml-50">
                {children}
            </Col>
        </Row>
    )
}

export default Header;