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

const InfoWorkStations = (props) => {
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
        <small>Información del programa</small>
      </ModalHeader>
      <ModalBody className="modal-dialog-centered">
        <Container className="my-2">
          <div className="w-full flex flex-wrap">
            <div className="w-full">
              <strong>Descripción del Cargo / Funciones / Responsabilidades/ Competencias Requeridas / Principales Riesgos:</strong>
            </div>
            <div className="w-full">
              {item.description}
            </div>
            <div className="w-full mt-2">
              <strong>Licencias / Permisos / Certificaciones / Cursos / Conocimientos obligatorios:</strong>
            </div>
            <div className="w-full">
              {item.information}
            </div>
          </div>
          {/* <Row className="mb-1">
            <Row className="mt-1">
              <strong>Descripción:</strong>
            </Row>


            <Row className="mb-1">
              {item.description}
            </Row>

          </Row>
          <Row className="mb-1">
            <Col><strong>Información Adicional:</strong></Col>
            <Col>{item.information}</Col>
          </Row> */}
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

export default InfoWorkStations
