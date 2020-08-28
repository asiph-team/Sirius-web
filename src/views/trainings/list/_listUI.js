import React, { useState } from 'react'
import { Button, Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import { PlusCircle } from 'react-feather'
import { ContactInfoEmployee } from '../../../components/custom/modals'
import {
  AlertDialog, Header, List,
} from '../../../components/custom'
import { headers } from './_headers'

const ListUI = (props) => {
  const { data, remove } = props
  const [selected, setSelected] = useState({})
  const [visibility, setVisibility] = useState({ remove: false })
  const show = (item, type, visible = true) => {
    setSelected(item)
    setVisibility({ ...visibility, [type]: visible })
  }
  return (
    <>
      <Header title="Capacitaciones" icon="Clipboard">
        <Link to="/dashboard/trainings/add">
          <Button color="primary">
            <PlusCircle size={14} />
                &nbsp;Agregar capacitación
          </Button>
        </Link>
      </Header>
      <Card>
        <CardBody>
          <List
            data={data}
            headers={headers}
            show={show}
            resource="trainings"
          />
        </CardBody>
      </Card>
      <ContactInfoEmployee
        visibility={visibility.contact}
        onClose={() => setVisibility({ ...visibility, contact: false })}
        item={selected}
      />
      {
        visibility.remove && (
        <AlertDialog
          title={`¿Estás seguro de eliminar la capacitación "${selected.name}"?`}
          paragraph="Estas operación es irreversible, se eliminará toda la información relacionada a la capacitación."
          callback={() => remove({ id: selected.id }, null)}
          callbackCancel={() => setVisibility({ ...visibility, remove: false })}
        />
        )
      }
    </>
  )
}

export default ListUI
