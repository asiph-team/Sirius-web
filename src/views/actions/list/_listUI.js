import React, { useState } from 'react'
import { Button, Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import { PlusCircle } from 'react-feather'
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
      <Header title="Planes de acción" icon="BookOpen">
        <Link to="/dashboard/actions/add">
          <Button color="primary">
            <PlusCircle size={14} />
                &nbsp;Agregar plan
          </Button>
        </Link>
      </Header>
      <Card>
        <CardBody>
          {
            data && (
              <List
                data={data.data.data}
                headers={headers}
                show={show}
                resource="actions"
              />
            )
          }
        </CardBody>
      </Card>
      {
        visibility.remove && (
          <AlertDialog
            title={`¿Estás seguro de eliminar el plan de acción "${selected.name}"?`}
            paragraph="Estas operación es irreversible, se eliminará toda la información relacionada al trabajador."
            callback={() => remove({ id: selected.id }, null)}
            callbackCancel={() => setVisibility({ ...visibility, remove: false })}
          />
        )
      }
    </>
  )
}

export default ListUI
