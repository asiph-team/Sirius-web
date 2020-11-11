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
import { useFetchResources } from '../../../utility/customHooks/resources'
import { urlApi, baseApiUrl } from '../../../utility/helpers/consts'

const ContactInfoEmployee = (props) => {
  const { onClose, visibility, item } = props
  const { items: trainings } = useFetchResources(`${urlApi}${baseApiUrl}employees/${item.id}/trainings?all`)
  const { items: data } = trainings
  const trainingsList = data ? data.data.data : null
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
            <Col>+569{item.phone}</Col>
          </Row>
          <Row className="mb-1">
            <Col><strong>Fecha de inicio laboral:</strong></Col>
            <Col>{item.date_start}</Col>
          </Row>
          <Row className="mb-1">
            <Col><strong>Participantes:</strong></Col>
            <Col>
              {
                trainingsList && trainingsList.map((emp) => (
                  <li> {emp.name} </li>
                ))
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

export default ContactInfoEmployee
