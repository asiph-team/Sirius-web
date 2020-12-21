import React, { useRef } from 'react'
import {
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardBody,
} from 'reactstrap'
import SignatureCanvas from 'react-signature-canvas'
import { urlApi, baseApiUrl } from '../../../utility/helpers/consts'

const CourseSignature = (props) => {
  const { onClose, visibility, item, data, updateSignature } = props
  const url = `${urlApi}${baseApiUrl}trainings/courses/${item.id}/signature`
  const sigCanvas = useRef({})
  const clear = () => sigCanvas.current.clear()
  const send = () => {
    updateSignature({ signature: sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'), _method: 'PUT' }, url, item.id, data)
    onClose()
  }
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
        <small>Firmar asistencia</small>
      </ModalHeader>
      <ModalBody className="modal-dialog-centered">
        <Container>
          <CardBody className="d-flex align-items-center justify-content-center">
            <SignatureCanvas
              ref={sigCanvas}
              canvasProps={{ width: 500, height: 200, className: 'sigCanvas border' }}
            />
          </CardBody>
        </Container>
      </ModalBody>
      <ModalFooter>
        <Button onClick={() => clear()}>Limpiar</Button>
        {' '}
        <Button color="primary" onClick={() => send()}>
          Enviar firma
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default CourseSignature
