import React from 'react'
import {
  Container,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap'
import { urlApi, baseApiUrl } from '../../../../utility/helpers/consts'
import { userData } from '../../../../utility/helpers/functions'
import { usePostResources, useFetchResources } from '../../../../utility/customHooks/resources'
import FormUI from './_form'

const ActionsExport = (props) => {
  const { onClose, visibility } = props
  const url = `${urlApi}${baseApiUrl}actions/export`
  const { data: { items }, postExport } = usePostResources()
  const { items: areas } = useFetchResources(`${urlApi}${baseApiUrl}areas?all`)
  const { items: data } = areas
  const user = userData()
  const options = data ? data.data.data.map((area) => ({ label: area.name, value: area.id })) : null
  if (options) { options.push({ label: 'Todas las áreas', value: null }) }
  return (
    <Modal
      isOpen={visibility}
      toggle={onClose}
      className="modal-dialog-centered modal-lg"
    >
      <ModalHeader toggle={onClose} className="bg-primary">
        <strong>Planes de acción</strong>
        {' '}
        |
        {' '}
        <small>Exportar información</small>
      </ModalHeader>
      <ModalBody className="modal-dialog-centered">
        <Container className="my-2">
          <FormUI handleSubmit={(values) => postExport(values, url)} title="Exportar" options={options} onClose={onClose} items={items} user={user} />
        </Container>
      </ModalBody>
    </Modal>
  )
}

export default ActionsExport
