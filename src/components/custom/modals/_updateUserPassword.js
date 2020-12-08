import React from 'react'
import {
  Container,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap'
import Edit from '../../../views/auth/Update'

const ResetUserPassword = (props) => {
  const { onClose, visibility, userData, setVisibility } = props
  return (
    <Modal
      isOpen={visibility}
      toggle={onClose}
      className="modal-dialog-centered modal-md"
    >
      <ModalHeader toggle={onClose} className="bg-primary">
        <small>Editar Constraseña</small>
      </ModalHeader>
      <ModalBody className="modal-dialog-centered">
        <Container className="my-2">
          <Edit userData={userData} setVisibility={setVisibility} onClose={onClose} />
        </Container>
      </ModalBody>
    </Modal>
  )
}

export default ResetUserPassword
