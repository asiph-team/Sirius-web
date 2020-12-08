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
  CardImg,
} from 'reactstrap'
import noImg from '../../../assets/img/no_img.png'

const ContactInfoControlMeasure = (props) => {
  const { onClose, visibility, item } = props
  return (
    <Modal
      isOpen={visibility}
      toggle={onClose}
      className="modal-dialog-centered modal-lg"
    >
      <ModalHeader toggle={onClose} className="bg-primary">
        <strong>{`${item.name}`}</strong>
        {' '}
        |
        {' '}
        <small>Información de medida de control</small>
      </ModalHeader>
      <ModalBody className="modal-dialog-centered">
        <Container className="my-2">
          <Row className="mb-1">
            <Col><strong>Medida de control:</strong></Col>
            <Col>{item.name}</Col>
          </Row>
          <Row className="mb-1">
            <Col><strong>Actividad:</strong></Col>
            <Col>{item.activity_name}</Col>
          </Row>
          <Row className="mb-1">
            <Col lg={6}><strong>Imagen:</strong></Col>
            <Col sm={6} md={6} lg={4} className="justify-content-md-center row">
              {
                item.image && (
                  <CardImg
                    width="100px"
                    className="img-fluid"
                    src={item.image.length > 20 ? item.image : noImg}
                    alt={item.activity_name}
                  />
                )
              }
            </Col>
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

export default ContactInfoControlMeasure
