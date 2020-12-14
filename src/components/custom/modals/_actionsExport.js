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
import { usePostResources } from '../../../utility/customHooks/resources'

const ActionsExport = (props) => {
  const { onClose, visibility, item } = props
  const url = `${urlApi}${baseApiUrl}actions`
  const { data: { loading, error, items }, postData, clean } = usePostResources()
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
          <Row>
            <h1>Exportar</h1>
          </Row>


        </Container>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={onClose}>
          Aceptar
        </Button>
        {' '}
      </ModalFooter>
    </Modal >
  )
}

export default ActionsExport
