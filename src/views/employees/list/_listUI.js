import React, { useState } from 'react'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { PlusCircle } from 'react-feather'
import moment from 'moment'
import { ContactInfoEmployee } from '../../../components/custom/modals'
import {
  AlertDialog, Can, Header, List, Search,
} from '../../../components/custom'
import { headers } from './_headers'
import Pagination from '../../../components/custom/pagination'
import { phoneFormatTo8 } from '../../../utility/helpers/functions'

const ListUI = (props) => {
  const { data, remove, changeStatus, pagination, search } = props
  const [selected, setSelected] = useState({})
  const [visibility, setVisibility] = useState({ contact: false, remove: false, status: false })
  const show = (item, type, visible = true) => {
    setSelected(item)
    setVisibility({ ...visibility, [type]: visible })
  }
  const transformData = () => {
    const newData = data.data.data.map((item) => {
      return {
        ...item,
        workstation: item.workstation ? item.workstation.name : 'No Asignada',
        workstation_id: item.workstation ? item.workstation.id : 'No Asignada',
        phone: phoneFormatTo8(item.phone),
        originalPhone: item.phone,
        status: item.state,
      }
    })
    return newData
  }
  return (
    <>
      <Header title="Trabajadores" icon="Users">
        <Search placeholder="Buscar por rut, nombre y apellidos" search={search} icon="Search" />
        <Can rule="employees:add">
          <Link to="/dashboard/employees/add">
            <Button color="primary">
              <PlusCircle size={14} />
                &nbsp;Agregar trabajador
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
                resource="employees"
                contact
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
            title={`¿Estás seguro de eliminar a ${selected.name}?`}
            paragraph="Estas operación es irreversible, se eliminará toda la información relacionada al trabajador."
            callback={() => remove({ id: selected.id }, null)}
            callbackCancel={() => setVisibility({ ...visibility, remove: false })}
          />
        )
      }
      {
        visibility.status && (
          <AlertDialog
            title={`¿Estás seguro de ${selected.status ? 'desactivar' : 'activar'} a ${selected.name}?`}
            paragraph={`Esta operación ${selected.status ? 'desactivara' : 'activara'} al trabajador en la plataforma.`}
            callback={() => { changeStatus({ ...selected, state: !selected.state, phone: selected.originalPhone, date_start: moment(selected.date_start, 'YYYY-MM-DD') }, 'state'); setVisibility({ ...visibility, status: false }) }}
            callbackCancel={() => setVisibility({ ...visibility, status: false })}
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
