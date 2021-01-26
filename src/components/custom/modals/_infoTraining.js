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
import { urlApi, baseApiUrl } from '../../../utility/helpers/consts'
import { useFetchResources } from '../../../utility/customHooks/resources'

const InfoTraining = (props) => {
  const { onClose, visibility, item } = props
  const { items: participants } = useFetchResources(`${urlApi}${baseApiUrl}trainings/${item.id}/employees?all`)
  const { items: data } = participants
  const list = data ? data.data.data.map((info) => ({ name: `${info.name} ${info.lastname}` })).sort((a, b) => { return a.name > b.name ? 1 : -1 }) : null
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
            <Col><strong>Fecha de término:</strong></Col>
            <Col>{item.end_date}</Col>
          </Row>
          <Row className="mb-1">
            <Col><strong>Descripción:</strong></Col>
            <Col>{item.description}</Col>
          </Row>
          <Row className="mb-1">
            <Col><strong>Participantes:</strong></Col>
            <Col>
              {
                data && list.map((emp) => (
                  <li key={emp.id}> {emp.name} </li>
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

export default InfoTraining
