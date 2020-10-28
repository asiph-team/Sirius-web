import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import Switch from 'rc-switch'
import 'rc-switch/assets/index.css'
import * as Icon from 'react-feather'
import DataTable from "react-data-table-component"
import Can from '../can'

const CustomSwitch = (props) => {
  const { status, changeStatus } = props
  return (
    <Switch
      onClick={() => changeStatus(!status)}
      checked={status}
    />
  )
}

const List = (props) => {
  const {
    headers, data, show, resource, contact,
  } = props
  const menu = {
    cell: (row) => {
      return (
        <>
          {contact && <Button color="link" onClick={() => show(row, 'contact')} className="p-0"><Icon.Search size={20} /></Button>}
          <Can rule={`${resource}:edit`}><Link to={{ pathname: `/dashboard/${resource}/edit`, state: { placeholder: row } }}><Button color="link" className="p-0"><Icon.Edit2 size={20} /></Button></Link></Can>
          <Can rule={`${resource}:delete`}><Button onClick={() => show(row, 'remove')} color="link" className="p-0"><Icon.XCircle size={20} /></Button></Can>
        </>
      )
    },
  }
  const updateStatus = {
    cell: (row) => {
      return (
        <CustomSwitch status={row.status} changeStatus={() => show(row, 'status')} /> 
      )
    },
  }
  headers.forEach((obj) => {
    // eslint-disable-next-line no-unused-expressions
    obj.selector === 'actions'
      ? obj.cell = menu.cell : obj.selector === 'status' ? obj.cell = updateStatus.cell : obj.cell = null
  })
  return (
    <DataTable
      data={data}
      columns={headers}
      noHeader
    />
  )
}

export default List
