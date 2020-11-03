import React from 'react'
import { Row, Col } from 'reactstrap'
import * as Icon from 'react-feather'

const Header = (props) => {
  const { icon, title, children } = props
  const IconTag = Icon[icon]
  return (
    <Row className="mb-2">
      <Col sm="12" lg="6" className="d-flex align-items-center">
        <IconTag size={20} />
        <h3 className="font-medium-5 extension-title mb-0" data-tour="extension-title">
          &nbsp;
          {title}
        </h3>
      </Col>
      <Col sm="12" lg="6" className="d-flex align-items-center justify-content-end">
        {children}
      </Col>
    </Row>
  )
}

export default Header
