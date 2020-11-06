import React, { useState } from 'react'
import { Button, Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import { PlusCircle } from 'react-feather'
import {
  AlertDialog, Header, List, Search,
} from '../../../components/custom'
import { headers } from './_headers'
import Pagination from '../../../components/custom/pagination'

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
        manager: item.user ? item.user.name : 'No Asignado',
      }
    })
    return newData
  }
  if (data) {
    transformData()
  }
  return (
    <>
      <Header title="Planes de acción" icon="BookOpen">
        <Search placeholder="Buscar..." search={search} icon="Search" temp={temp} param="origin" />
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
      {
        data && (
          <Pagination data={data.data} pagination={pagination} />
        )
      }
    </>
  )
}

export default ListUI
