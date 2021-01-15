import React from 'react'
import {
  Container,
  Modal,
  ModalBody,
} from 'reactstrap'
import { AddFORM } from '../../../views/employees/add'

const CreateModal = (props) => {
  const { onClose, visibility, addEmployee } = props

  return (
    <Modal
      isOpen={visibility}
      toggle={onClose}
      className="modal-dialog-centered modal-lg"
    >
      <ModalBody className="modal-dialog-centered">
        <Container>
          <AddFORM onClose={onClose} addEmployee={addEmployee} />
        </Container>

      </ModalBody>
    </Modal>
  )
}

export default CreateModal
