import React, { useState } from 'react'
import { Button, Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import { PlusCircle } from 'react-feather'
import moment from 'moment'
import {
  AlertDialog, Header, List, Search,
} from '../../../components/custom'
import { headers } from './_headers'
import Pagination from '../../../components/custom/pagination'

const ListUI = (props) => {
  const { data, remove, pagination, search, temp, changeStatus, ordering, order } = props
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
        manager: item.user ? item.user.name : 'No Asignado',
        area: item.area ? item.area.name : '--',
        state: item.status ? 'Abierto' : 'Cerrado',
      }
    })
    return newData
  }

  return (
    <>
      <Header title="Planes de acción" icon="BookOpen">
        <Search placeholder="Buscar por nombre u origen" search={search} icon="Search" temp={temp} param="filter" />
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
                data={transformData()}
                headers={headers}
                show={show}
                resource="actions"
                ordering={ordering}
                order={order}
                temp={temp}
              />
            )
          }
        </CardBody>
      </Card>
      {
        visibility.status && (
          <AlertDialog
            title={`¿Estás seguro de ${selected.status ? 'desactivar' : 'activar'} a ${selected.name}?`}
            paragraph={`Esta operación ${selected.status ? 'desactivara' : 'activara'} el plan de acción en la plataforma.`}
            callback={() => {
              changeStatus({
                id: selected.id,
                name: selected.name,
                origin: selected.origin,
                priority: selected.priority,
                manager_id: selected.manager_id,
                status: !selected.status,
                date_end: moment(selected.date_end, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                date_initial: moment(selected.date_initial, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                date_committed: moment(selected.date_committed, 'DD/MM/YYYY').format('YYYY-MM-DD'),
              }, 'status'); setVisibility({ ...visibility, status: false })
            }}
            callbackCancel={() => setVisibility({ ...visibility, status: false })}
          />
        )
      }
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
      {
        data && (
          <Pagination data={data.data} pagination={pagination} temp={temp} />
        )
      }
    </>
  )
}

export default ListUI
