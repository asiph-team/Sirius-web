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

const InfoTraining = (props) => {
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
        <small>Información de capacitación</small>
      </ModalHeader>
      <ModalBody className="modal-dialog-centered">
        <Container className="my-2">
          <Row className="mb-1">
            <Col><strong>Fecha de inicio:</strong></Col>
            <Col>{item.start_date}</Col>
          </Row>
          <Row className="mb-1">
            <Col><strong>Fecha de Termino:</strong></Col>
            <Col>{item.end_date}</Col>
          </Row>
          <Row className="mb-1">
            <Col><strong>Descripción:</strong></Col>
            <Col>{item.description}</Col>
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

export default InfoTraining
