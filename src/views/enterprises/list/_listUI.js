import React, { useState } from 'react'
import { Button, Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import { PlusCircle } from 'react-feather'
import { ContactInfoModal } from '../../../components/custom/modals'
import {
  AlertDialog, Header, List,
} from '../../../components/custom'
import { headers } from './_headers'

const ListUI = (props) => {
  const { data, remove } = props
  const [selected, setSelected] = useState({})
  const [visibility, setVisibility] = useState({ contact: false, remove: false })
  const show = (item, type, visible = true) => {
    setSelected(item)
    setVisibility({ ...visibility, [type]: visible })
  }
  return (
    <>
      <Header title="Empresas" icon="Shield">
        <Link to="/dashboard/enterprises/add">
          <Button color="primary">
            <PlusCircle size={14} />
                &nbsp;Agregar empresa
          </Button>
        </Link>
      </Header>
      <Card>
        <CardBody>
          <List
            data={data}
            headers={headers}
            show={show}
            resource="enterprises"
          />
        </CardBody>
      </Card>
      <ContactInfoModal
        visibility={visibility.contact}
        onClose={() => setVisibility({ ...visibility, contact: false })}
        item={selected}
      />
      {
        visibility.remove && (
        <AlertDialog
          title={`¿Estás seguro de eliminar a ${selected.name}?`}
          paragraph="Estas operación es irreversible, se eliminará toda la información respecto a la empresa."
          callback={() => remove({ id: selected.id }, null)}
          callbackCancel={() => setVisibility({ ...visibility, remove: false })}
        />
        )
      }
    </>
  )
}

export default ListUI
