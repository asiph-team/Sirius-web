import React from 'react'
import {
  Button,
  Col,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
} from 'reactstrap'

const ContactInfoModal = (props) => {
  const { onClose, visibility, item } = props
  return (
    <Modal
      isOpen={visibility}
      toggle={onClose}
      className="modal-dialog-centered modal-lg"
    >
      <ModalHeader toggle={onClose} className="bg-primary">
        <strong>{item.name}</strong>
        {' '}
        |
        {' '}
        <small>Información de contacto</small>
      </ModalHeader>
      <ModalBody className="modal-dialog-centered">
        <Container className="my-2">
          <Row className="mb-1">
            <Col><strong>Representante Legal:</strong></Col>
            <Col>{item.RL}</Col>
          </Row>
          <Row className="mb-1">
            <Col><strong>Contacto Representante Legal:</strong></Col>
            <Col>{item.CRL}</Col>
          </Row>
          <Row className="mb-1">
            <Col><strong>Representante Técnico:</strong></Col>
            <Col>{item.RT}</Col>
          </Row>
          <Row className="mb-1">
            <Col><strong>Contacto Representante Técnico:</strong></Col>
            <Col>{item.CRT}</Col>
          </Row>
          <Row className="mb-1">
            <Col><strong>Email:</strong></Col>
            <Col>{item.email}</Col>
          </Row>
          <Row className="mb-1">
            <Col><strong>Teléfono:</strong></Col>
            <Col>{item.phone}</Col>
          </Row>
          <Row className="mb-1">
            <Col><strong>Dirección:</strong></Col>
            <Col>{item.address}</Col>
          </Row>
        </Container>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={onClose}>
          Aceptar
        </Button>
        {' '}
      </ModalFooter>
    </Modal>
  )
}

export default ContactInfoModal
