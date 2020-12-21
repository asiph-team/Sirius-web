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
import moment from 'moment'
import SignatureCanvas from 'react-signature-canvas'
import { urlApi, baseApiUrl } from '../../../utility/helpers/consts'

const ProgramSignature = (props) => {
  const { onClose, visibility, item, data, updateSignature, title } = props
  const url = `${urlApi}${baseApiUrl}programs/courses/${item.id}/signature`
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
        <strong>{title.name}</strong>
        {' '}
        |
        {' '}
        <small>Firmar asistencia</small>
      </ModalHeader>
      <ModalBody className="modal-dialog-centered">
        <Container>
          <CardBody className="d-flex flex-wrap align-items-center justify-content-center">
            <h3 className="col-lg-12 text-center">Firmar Asistencia</h3>
            <h4 className="col-lg-12 text-center">{item.name}</h4>
            <h4 className="col-lg-12 text-center">{item.rut}</h4>
            <h4 className="col-lg-12 text-center">{moment(title.date).format('DD/MM/YYYY')}</h4>
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

export default ProgramSignature
