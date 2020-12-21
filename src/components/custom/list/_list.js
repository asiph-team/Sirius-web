import React from 'react'
import { Button, UncontrolledTooltip } from 'reactstrap'
import { Link } from 'react-router-dom'
import Switch from 'rc-switch'
import 'rc-switch/assets/index.css'
import * as Icon from 'react-feather'
import DataTable from 'react-data-table-component'
import Can from '../can'
import { semaphore, semaphoreFields, semaphoreText } from '../../../utility/helpers/consts'
import { permitted } from '../../../utility/helpers/functions'

const CustomSwitch = (props) => {
  const { status, changeStatus } = props
  return (
    <Switch
      onClick={() => changeStatus(!status)}
      checked={status}
    />
  )
}

const SemaphoreChip = {
  cell: (row, index, obj) => {
    return (
      <>
        <div id={`semaforo-${index}`} className={`rounded-circle bg-${semaphore[row[obj.selector]]} `} style={{ height: '20px', width: '20px' }} />
        <UncontrolledTooltip placement="right" target={`semaforo-${index}`}>
          {semaphoreText[row[obj.selector]]}
        </UncontrolledTooltip>
      </>
    )
  },
}

const List = (props) => {
  const {
    headers, data, show, resource, contact, ordering,
  } = props
  const handleChange = (row) => {
    show(row, 'contact')
  }

  const menu = {
    cell: (row) => {
      return (
        <>
          {
            permitted('enterprises:workon') && (
              <Can rule="enterprises:workon">
                <Button onClick={() => show(row, 'workon')} color="link" className="p-0"><Icon.Eye size={20} /></Button>
              </Can>
            )
          }
          <Can rule={`${resource}:detail`}>
            <Link to={{ pathname: `/dashboard/${resource}/detail`, state: { training: row } }}><Button color="link" className="p-0"><Icon.ZoomIn size={20} /></Button></Link>
          </Can>
          <Can rule="controls:edit">
            {
              resource === 'activities' && (
                <Link to={{ pathname: '/dashboard/controls', state: { activity_id: row.id, activity_name: row.name } }}><Button color="link" className="p-0"><Icon.UserCheck size={20} /></Button></Link>
              )
            }
          </Can>
          <Can rule={`${resource}:edit`}><Link to={{ pathname: `/dashboard/${resource}/edit`, state: { placeholder: row } }}><Button color="link" className="mx-1 p-0"><Icon.Edit2 size={20} /></Button></Link></Can>
          <Can rule={`${resource}:delete`}><Button onClick={() => show(row, 'remove')} color="link" className="p-0"><Icon.XCircle size={20} /></Button></Can>
        </>
      )
    },
  }

  const Signature = {
    cell: (row, index, obj) => {
      return (
        <>
          { row.signature ? 'Firmado' : <Button onClick={() => show(row, 'signature')} color="link" className="p-0"><Icon.Edit3 size={20} /> Firmar</Button>}
        </>
      )
    },
  }

  const updateStatus = {
    cell: (row) => {
      if (permitted(`${resource}:edit`)) { return <CustomSwitch status={row.status} changeStatus={() => show(row, 'status')} /> } return (<>{row.state}</>)
    },
  }
  headers.forEach((obj) => {
    // eslint-disable-next-line no-unused-expressions
    obj.selector === 'actions' && (permitted(`${resource}:edit`) || permitted(`${resource}:delete`))
      ? obj.cell = menu.cell : obj.selector === 'status'
        ? obj.cell = updateStatus.cell : semaphoreFields.includes(obj.selector)
          ? obj.cell = SemaphoreChip.cell : obj.selector === '_signature_'
            ? obj.cell = Signature.cell : obj
  })
  const handleSort = (column, sortDirection) => {
    ordering(column.orderKey ? column.orderKey : column.selector, sortDirection.toUpperCase())
  }
  return (
    <DataTable
      data={data}
      columns={headers}
      noHeader
      pointerOnHover={contact}
      onRowClicked={contact ? (row) => handleChange(row) : null}
      noDataComponent="No se encontraron coincidencias."
      sortServer
      onSort={handleSort}
    />
  )
}

export default List
