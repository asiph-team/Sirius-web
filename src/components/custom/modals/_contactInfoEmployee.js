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

const ContactInfoEmployee = (props) => {
  const { onClose, visibility, item } = props
  return (
    <Modal
      isOpen={visibility}
      toggle={onClose}
      className="modal-dialog-centered modal-lg"
    >
      <ModalHeader toggle={onClose} className="bg-primary">
        <strong>{`${item.name} ${item.lastname}`}</strong>
        {' '}
        |
        {' '}
        <small>Información de contacto</small>
      </ModalHeader>
      <ModalBody className="modal-dialog-centered">
        <Container className="my-2">
          <Row className="mb-1">
            <Col><strong>Email:</strong></Col>
            <Col>{item.email}</Col>
          </Row>
          <Row className="mb-1">
            <Col><strong>Dirección:</strong></Col>
            <Col>{item.address}</Col>
          </Row>
          <Row className="mb-1">
            <Col><strong>Teléfono de contacto:</strong></Col>
            <Col>{item.phone}</Col>
          </Row>
          <Row className="mb-1">
            <Col><strong>Fecha de inicio laboral:</strong></Col>
            <Col>{item.date_start}</Col>
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

export default ContactInfoEmployee
