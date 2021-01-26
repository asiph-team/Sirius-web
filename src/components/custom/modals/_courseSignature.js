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

const CourseSignature = (props) => {
  const { onClose, visibility, item, data, updateSignature, title, view } = props
  const url = `${urlApi}${baseApiUrl}${view}/courses/assistance/${item.id}/signature`
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
            <h3 className="col-lg-12 text-center">{item.signature ? 'Firma de' : 'Firmar'} Asistencia</h3>
            <h4 className="col-lg-12 text-center">{item.name}</h4>
            <h4 className="col-lg-12 text-center">{item.rut}</h4>
            <h4 className="col-lg-12 text-center">
              {
                item.signature
                  ? item.date_signature : moment(title.date).format('DD/MM/YYYY')
              }
            </h4>
            {item.signature ? (
              <img src={item.signature} alt={item.name} />
            )
              : (
                <SignatureCanvas
                  ref={sigCanvas}
                  canvasProps={
                    {
                      width: 500,
                      height: 200,
                      className: 'sigCanvas border',
                    }
                  }
                />
              )}
          </CardBody>
        </Container>
      </ModalBody>
      <ModalFooter>
        {
          item.signature
            ? (
              <>
                <Button color="primary" onClick={onClose}>
                  Aceptar
                </Button>
              </>
            ) : (
              <>
                <Button onClick={() => clear()}>Limpiar firma</Button>
                {' '}
                <Button color="primary" onClick={() => send()}>
                  Enviar firma
                </Button>
              </>
            )
        }
      </ModalFooter>
    </Modal>
  )
}

export default CourseSignature
