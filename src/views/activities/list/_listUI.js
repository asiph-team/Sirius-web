import React, { useState } from 'react'
import { Button, Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import { PlusCircle } from 'react-feather'
import { ContactInfoEmployee } from '../../../components/custom/modals'
import {
  AlertDialog, Can, Header, List,
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
      <Header title="Acitvidades" icon="Activity">
        <Can rule="activities:add">
          <Link to="/dashboard/activities/add">
            <Button color="primary">
              <PlusCircle size={14} />
                &nbsp;Agregar actividad
            </Button>
          </Link>
        </Can>
      </Header>
      <Card>
        <CardBody>
          <List
            data={data}
            headers={headers}
            show={show}
            resource="activities"
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
          title={`¿Estás seguro de eliminar la actividad "${selected.name}"?`}
          paragraph="Estas operación es irreversible, se eliminará toda la información relacionada a la actividad."
          callback={() => remove({ id: selected.id }, null)}
          callbackCancel={() => setVisibility({ ...visibility, remove: false })}
        />
        )
      }
    </>
  )
}

export default ListUI
