import React from 'react'
import {
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardBody,
} from 'reactstrap'
import { urlApi, baseApiUrl } from '../../../utility/helpers/consts'
import { useFetchResources } from '../../../utility/customHooks/resources'

const CourseAssistance = (props) => {
  const { onClose, visibility, item } = props
  const { items: participants } = useFetchResources(`${urlApi}${baseApiUrl}trainings/courses/${item.id}/assistance`)
  const { items: data } = participants
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
        <small>Información del curso</small>
      </ModalHeader>
      <ModalBody className="modal-dialog-centered">
        <Container>
          <CardBody>
            <h1 className="ml-1 mb-1">{item.name}</h1>
            <h2 className="ml-1 mb-2">Trabajadores</h2>
            {
              data && data.data.data.map((employee) => (
                <div className="d-flex col-lg-12 justify-content-between align-items-center">
                  <h3>{employee.user.name} {employee.user.lastname}</h3>
                  <h3>{employee.status === 'attended' ? 'Asistió' : 'Invitado'}</h3>
                </div>
              ))
            }
          </CardBody>
        </Container>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={onClose}>
          Aceptar
        </Button>
        {' '}
      </ModalFooter>
    </Modal>
  )
}

export default CourseAssistance
