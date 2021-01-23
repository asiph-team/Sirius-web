import React, { useState } from 'react'
import { Button, Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import { PlusCircle } from 'react-feather'
import moment from 'moment'
import {
  AlertDialog, Can, Header, List, Search,
} from '../../../components/custom'
import { headers } from './_headers'
import PaginationSeprated from '../../../components/custom/pagination'
import { capitalizeFirstLetter } from '../../../utility/helpers/functions'

const ListUI = (props) => {
  const { data, remove, pagination, search, temp, ordering } = props
  const [selected, setSelected] = useState({})
  const [visibility, setVisibility] = useState({ remove: false })
  const show = (item, type, visible = true) => {
    setSelected(item)
    setVisibility({ ...visibility, [type]: visible })
  }
  const transformData = () => data.data.data.map((item) => ({
    id: item.id,
    name: item.name,
    workstation: item.workstation.name,
    frequency: item.frequency ? capitalizeFirstLetter(item.frequency) : '--',
    start_date: moment(item.start_date).format('DD/MM/YYYY'),
    end_date: moment(item.end_date).format('DD/MM/YYYY'),
    description: item.description,
  }))
  return (
    <>
      <Header title="Vigilancia Médica" icon="Video">
        <Search placeholder="Buscar por nombre" search={search} icon="Search" temp={temp} param="filter" />
        <Can rule="programs:add">
          <Link to="/dashboard/programs/add">
            <Button color="primary" className="my-1">
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
                ordering={ordering}
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
