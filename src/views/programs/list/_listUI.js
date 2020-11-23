import React, { useState } from 'react'
import { Button, Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import { PlusCircle } from 'react-feather'
import {
  AlertDialog, Can, Header, List, Search,
} from '../../../components/custom'
import { headers } from './_headers'
import PaginationSeprated from '../../../components/custom/pagination'

const ListUI = (props) => {
  const { data, remove, pagination, search, temp } = props
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
        workstation: item.workstation ? item.workstation.name : '--',
        workstations_id: item.workstation ? item.workstation.id : 'No Asignado',
      }
    })
    return newData
  }
  if (data) {
    transformData()
  }
  return (
    <>
      <Header title="Vigilancia Médica" icon="Video">
        <Search placeholder="Buscar por nombre" search={search} icon="Search" temp={temp} param="filter" />
        <Can rule="programs:add">
          <Link to="/dashboard/programs/add">
            <Button color="primary">
              <PlusCircle size={14} />
                &nbsp;Agregar
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
                resource="programs"
                show={show}
              />
            )
          }
        </CardBody>
      </Card>
      {
        visibility.remove && (
          <AlertDialog
            title={`¿Estás seguro de eliminar la vigilancia médica "${selected.name}"?`}
            paragraph="Estas operación es irreversible, se eliminará toda la información respecto a la vigilancia médica."
            callback={() => remove({ id: selected.id }, null)}
            callbackCancel={() => setVisibility({ ...visibility, remove: false })}
          />
        )
      }
      {
        data && (
          <PaginationSeprated data={data.data} pagination={pagination} temp={temp} param="filter" />
        )
      }
    </>
  )
}

export default ListUI
