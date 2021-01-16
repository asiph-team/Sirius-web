import React from 'react'
import {
  Container,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap'
import { urlApi, baseApiUrl } from '../../../../utility/helpers/consts'
import { usePostResources } from '../../../../utility/customHooks/resources'
import FormUI from './_form'

const TrainerSignature = (props) => {
  const { onClose, visibility, item } = props
  const url = `${urlApi}${baseApiUrl}trainings/courses/${item.id}/relator`
  const { patchData } = usePostResources()
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
            <FormUI handleSubmit={(values) => patchData({ ...values, _method: 'PATCH' }, url)} title="Enviar" onClose={onClose} />
          </Container>
        </ModalBody>
      </Modal>
    </>
  )
}

export default TrainerSignature
