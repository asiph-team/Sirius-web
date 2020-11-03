import React, { useState } from 'react'
import { Button, Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import { PlusCircle } from 'react-feather'
import { ContactInfoEmployee } from '../../../components/custom/modals'
import {
  AlertDialog, Can, Header, List, Search,
} from '../../../components/custom'
import { headers } from './_headers'
import Pagination from '../../../components/custom/pagination'

const ListUI = (props) => {
  const { data, remove, pagination, search } = props
  const [selected, setSelected] = useState({})
  const [visibility, setVisibility] = useState({ remove: false })
  const show = (item, type, visible = true) => {
    setSelected(item)
    setVisibility({ ...visibility, [type]: visible })
  }
  const transformData = () => {
    const newData = data.data.data.map((item) => {
      return {
        ...item,
        workstation: item.workstations ? item.workstations.name : 'No Asignada',
      }
    })
    return newData
  }
  if (data) {
    transformData()
  }
  return (
    <>
      <Header title="Actividades" icon="Activity">
        <Search placeholder="Buscar por nombre" search={search} icon="Search" param="name" />
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
          {
            data && (
              <List
                data={transformData()}
                headers={headers}
                show={show}
                resource="activities"
              />
            )
          }
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
      {
        data && (
          <Pagination data={data.data} pagination={pagination} />
        )
      }
    </>
  )
}

export default ListUI
