import React from 'react'
import {
  Container,
  Modal,
  ModalBody,
} from 'reactstrap'
import Add from '../../../views/employees/add'

const CreateModal = (props) => {
  const { onClose, visibility, item } = props

  return (
    <Modal
      isOpen={visibility}
      toggle={onClose}
      className="modal-dialog-centered modal-lg"
    >
      <ModalBody className="modal-dialog-centered">
        <Container className="my-2">
          <Add />
        </Container>

      </ModalBody>
      {/* <ModalFooter>
        <Button color="primary" onClick={onClose}>
          Aceptar
        </Button>
        {' '}
      </ModalFooter> */}
    </Modal>
  )
}

export default CreateModal
