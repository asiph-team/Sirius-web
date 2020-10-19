import React, { useState } from 'react'
import { Button, Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import { PlusCircle } from 'react-feather'
import {
  AlertDialog, Can, Header, List,
} from '../../../components/custom'
import { InfoWorkStations } from '../../../components/custom/modals'
import { headers } from './_headers'
import PaginationSeprated from '../../../components/custom/pagination'

const ListUI = (props) => {
  const { data, remove, pagination } = props
  const [selected, setSelected] = useState({})
  const [visibility, setVisibility] = useState({ contact: false, remove: false })
  const show = (item, type, visible = true) => {
    setSelected(item)
    setVisibility({ ...visibility, [type]: visible })
  }
  return (
    <>
      <Header title="Puestos de trabajo" icon="Briefcase">
        <Can rule="workstations:add">
          <Link to="/dashboard/workstations/add">
            <Button color="primary">
              <PlusCircle size={14} />
                &nbsp;Agregar puesto
            </Button>
          </Link>
        </Can>
      </Header>
      <Card>
        <CardBody>
          {
            data && (
              <List
                data={data.data.data}
                headers={headers}
                resource="workstations"
                show={show}
                contact
              />
            )
          }
        </CardBody>
      </Card>
      <InfoWorkStations
        visibility={visibility.contact}
        onClose={() => setVisibility({ ...visibility, contact: false })}
        item={selected}
      />
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
      {
        data && (
          <PaginationSeprated data={data.data} pagination={pagination} />
        )
      }
    </>
  )
}

export default ListUI
