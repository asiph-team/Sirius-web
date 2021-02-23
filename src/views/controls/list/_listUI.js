import React, { useState } from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { ChevronLeft, PlusCircle } from 'react-feather'
import moment from 'moment'
import { ContactInfoControlMeasure } from '../../../components/custom/modals'
import {
  AlertDialog, Can, Header, List, Search,
} from '../../../components/custom'
import { headers } from './_headers'
import Pagination from '../../../components/custom/pagination'

const ListUI = (props) => {
  const { data, remove, changeStatus, pagination, search, temp, activity, ordering } = props
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
        activity_name: item.activity ? item.activity.name : '--',
        activity_id: item.activity ? item.activity.id : '--',
      }
    })
    return newData
  }
  return (
    <>
      <Header title="Medidas de control" icon="UserCheck">
        <Col sm="mt-1" lg="auto" className="d-flex align-items-center justify-content-end">
          <Link to="/dashboard/activities">
            <Button size="" color="primary" className="my-1">
              <ChevronLeft size={14} />
                &nbsp;Volver
            </Button>
          </Link>
        </Col>
        <Search placeholder="Buscar por nombre" search={search} icon="Search" temp={temp} param="filter" />
        <Can rule="controls:add">
          <Col lg="auto" sm="mt-1" md="mt-1" className="d-flex align-items-center justify-content-end my-1">
            <Link to={`/dashboard/controls/add/${activity}`}>
              <Button size="" color="primary">
                <PlusCircle size={14} />
                &nbsp;Agregar medida de control
              </Button>
            </Link>
          </Col>
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
                resource="controls"
                contact
                ordering={ordering}
              />
            )
          }
        </CardBody>
      </Card>
      <ContactInfoControlMeasure
        visibility={visibility.contact}
        onClose={() => setVisibility({ ...visibility, contact: false })}
        item={selected}
      />
      {
        visibility.remove && (
          <AlertDialog
            title={`¿Estás seguro de eliminar a ${selected.name}?`}
            paragraph="Estas operación es irreversible, se eliminará toda la información relacionada con la medida de control."
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
            callback={() => { changeStatus({ ...selected, state: !selected.state, phone: selected.phone, date_start: moment(selected.date_start, 'YYYY-MM-DD') }, 'state'); setVisibility({ ...visibility, status: false }) }}
            callbackCancel={() => setVisibility({ ...visibility, status: false })}
          />
        )
      }
      {
        data && (
          <Pagination data={data.data} pagination={pagination} temp={temp} param="filter" />
        )
      }
    </>
  )
}

export default ListUI
