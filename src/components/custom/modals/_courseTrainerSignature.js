import React, { useRef } from 'react'
import {
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardBody,
  Row,
  Col,
  Input,
} from 'reactstrap'
import moment from 'moment'
import SignatureCanvas from 'react-signature-canvas'
import { urlApi, baseApiUrl } from '../../../utility/helpers/consts'

const TrainerSignature = (props) => {
  const { onClose, visibility, item, data, updateSignature, title, label, view } = props
  const sigCanvas = useRef({})
  const clear = () => sigCanvas.current.clear()
  return (
    <Modal
      isOpen={visibility}
      toggle={onClose}
      className="modal-dialog-centered modal-lg"
    >
      <ModalHeader toggle={onClose} className="bg-primary">
        <strong></strong>
        {' '}
        Relator |
        {' '}
        <small>Firma asistencia</small>
      </ModalHeader>
      <ModalBody className="modal-dialog-centered">
        <Container className="my-2">
          <Row className="mb-1">
            <Col><strong>Nombre y apellido:</strong></Col>
            <Col><Input /></Col>
          </Row>
          <Row className="mb-1">
            <Col><strong>RUT:</strong></Col>
            <Col><Input /></Col>
          </Row>
          <Row className="mb-1">
            <Col><strong>Firma:</strong></Col>
            <Col>
              <SignatureCanvas
                ref={sigCanvas}
                canvasProps={
                  {
                    width: 350,
                    height: 200,
                    className: 'sigCanvas border',
                  }
                }
              />
            </Col>
          </Row>
        </Container>
      </ModalBody>
      <ModalFooter>
        <Button onClick={() => clear()}>Limpiar</Button>
        {' '}
        <Button color="primary">
          Enviar firma
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default TrainerSignature
