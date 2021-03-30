import React from 'react'
import {
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
} from 'reactstrap'
import { usePostResources } from '../../../../utility/customHooks/resources'
import FormUI from './_form'

const TrainerSignature = (props) => {
  const { onClose, visibility, item } = props
  const url = `trainings/courses/${item.id}/relator`
  const { data: { items }, patchData } = usePostResources()
  return (
    <>
      <Modal
        isOpen={visibility}
        toggle={onClose}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader toggle={onClose} className="bg-primary">
          <strong>Firma</strong>
          {' '}
          |
          {' '}
          <small>Relator</small>
        </ModalHeader>
        <ModalBody className="modal-dialog-centered">
          <Container className="my-2">
            {
              item.relator_signature || (items && items.data.relator_signature)
                ? (
                  <>
                    <Row className="mb-1">
                      <Col><strong>Nombre:</strong></Col>
                      <Col>{item.relator_name || items.data.relator_name}</Col>
                    </Row>
                    <Row className="mb-1">
                      <Col><strong>Rut:</strong></Col>
                      <Col>{item.relator_rut || items.data.relator_rut}</Col>
                    </Row>
                    <Row className="mb-1">
                      <Col><strong>Firma:</strong></Col>
                      <Col><img src={item.relator_signature || items.data.relator_signature} className="border" alt={item.relator_name} /></Col>
                    </Row>
                  </>
                ) : (
                  <FormUI
                    handleSubmit={
                      (values) => {
                        patchData({ ...values, _method: 'PATCH' }, url)
                        onClose()
                      }
                    }
                    title="Enviar"
                    onClose={onClose}
                  />
                )
            }
          </Container>
        </ModalBody>
      </Modal>
    </>
  )
}

export default TrainerSignature
