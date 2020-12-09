import React, { useState } from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { PlusCircle } from 'react-feather'
import {
  AlertDialog, Header, List, Search,
} from '../../../components/custom'
import { headers } from './_headers'
import PaginationSeprated from '../../../components/custom/pagination'

const ListUI = (props) => {
  const { data, remove, pagination, search, temp, ordering } = props
  const [selected, setSelected] = useState({})
  const [visibility, setVisibility] = useState({ remove: false, status: false })
  const show = (item, type, visible = true) => {
    setSelected(item)
    setVisibility({ ...visibility, [type]: visible })
  }
  const transformData = () => {
    const newData = data.data.data.map((item) => {
      return {
        id: item.id,
        name: item.name,
        description: item.description,
        user_id: item.user_chief_of_area.name,
        chief_areas_id: item.user_chief_of_area.id,
        total_employees: item.total_employees,
      }
    })
    return newData
  }
  if (data) {
    transformData()
  }
  return (
    <>
      <Header title="Áreas de trabajo" icon="Box">
        <Search placeholder="Buscar nombre" search={search} icon="Search" temp={temp} param="filter" />
        <Col lg="auto" sm="mt-1" className="d-flex align-items-center justify-content-end">
          <Link to="/dashboard/areas/add">
            <Button color="primary">
              <PlusCircle size={14} />
                &nbsp;Agregar área
            </Button>
          </Link>
        </Col>
      </Header>
      <Card>
        <CardBody>
          {
            data && (
              <List
                data={transformData()}
                headers={headers}
                resource="areas"
                show={show}
                ordering={ordering}
              />
            )
          }
        </CardBody>
      </Card>
      {
        visibility.remove && (
          <AlertDialog
            title={`¿Estás seguro de eliminar el área "${selected.name}"?`}
            paragraph="Esta operación es irreversible, se eliminará toda la información respecto al área de trabajo."
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
