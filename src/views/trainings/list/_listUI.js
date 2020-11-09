import React, { useState } from 'react'
import { Button, Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import { PlusCircle } from 'react-feather'
import moment from 'moment'
import { InfoTraining } from '../../../components/custom/modals'
import {
  AlertDialog, Header, List, Search,
} from '../../../components/custom'
import { headers } from './_headers'
import PaginationSeprated from '../../../components/custom/pagination'

const ListUI = (props) => {
  const { data, remove, pagination, search, temp } = props
  const [selected, setSelected] = useState({})
  const [visibility, setVisibility] = useState({ contact: false, remove: false })
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
        total_invited: item.total_invited,
        start_date: item.start_date,
        end_date: item.end_date,
        frequency: item.frequency,
        employees_id: [],
      }
    })
    return newData
  }
  if (data) {
    transformData()
  }


  return (
    <>
      <Header title="Capacitaciones" icon="Clipboard">
        <Search placeholder="Buscar por nombre" search={search} icon="Search" temp={temp} param="filter" />
        <Link to="/dashboard/trainings/add">
          <Button color="primary">
            <PlusCircle size={14} />
                &nbsp;Agregar capacitación
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
                resource="trainings"
                contact
              />
            )
          }
        </CardBody>
      </Card>
      <InfoTraining
        visibility={visibility.contact}
        onClose={() => setVisibility({ ...visibility, contact: false })}
        item={selected}
      />
      {
        visibility.remove && (
          <AlertDialog
            title={`¿Estás seguro de eliminar la capacitación "${selected.name}"?`}
            paragraph="Estas operación es irreversible, se eliminará toda la información relacionada a la capacitación."
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
