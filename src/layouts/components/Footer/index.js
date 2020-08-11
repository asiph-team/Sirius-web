import React from 'react'
import ScrollToTop from 'react-scroll-up'
import { Button } from 'reactstrap'
import { ArrowUp } from 'react-feather'

const Footer = () => (
  <footer className="footer footer-light footer-static">
    <p className="mb-0 clearfix">
      <span className="float-md-left d-block d-md-inline-block mt-25">
        Sirius -
        {' '}
        {new Date().getFullYear()}
      </span>
    </p>
    <ScrollToTop showUnder={160}>
      <Button color="primary" className="btn-icon scroll-top">
        <ArrowUp size={15} />
      </Button>
    </ScrollToTop>
  </footer>
)

export default Footer
