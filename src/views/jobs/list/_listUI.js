import React, { useState } from 'react'
import { Button, Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import { PlusCircle } from 'react-feather'
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
      <Header title="Puestos de trabajo" icon="Briefcase">
        <Can rule="jobs:add">
          <Link to="/dashboard/jobs/add">
            <Button color="primary">
              <PlusCircle size={14} />
                &nbsp;Agregar puesto
            </Button>
          </Link>
        </Can>
      </Header>
      <Card>
        <CardBody>
          <List
            data={data}
            headers={headers}
            resource="jobs"
            show={show}
          />
        </CardBody>
      </Card>
      {
        visibility.remove && (
        <AlertDialog
          title={`¿Estás seguro de eliminar el puesto "${selected.name}"?`}
          paragraph="Estas operación es irreversible, se eliminará toda la información respecto al puesto de trabajo."
          callback={() => remove({ id: selected.id }, null)}
          callbackCancel={() => setVisibility({ ...visibility, remove: false })}
        />
        )
      }
    </>
  )
}

export default ListUI
