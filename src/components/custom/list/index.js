import React from 'react'
import { Button, Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import Switch from 'rc-switch'
import 'rc-switch/assets/index.css'
import * as Icon from 'react-feather'
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
  return (
    <Table striped responsive>
      <thead>
        <tr>{headers.map((header) => <th key={Math.random() * 2}>{header.title}</th>)}</tr>
      </thead>
      <tbody>
        {data && data.map((item) => (
          <tr key={item.id}>
            {headers.map((header) => {
              const content = header.id === 'status' ? <CustomSwitch status={item.status} changeStatus={() => show(item, 'status')} /> : header.obj ? item[header.id][header.obj[0]][header.obj[1]] : item[header.id]
              return <td key={item.id + Math.random()}>{content}</td>
            })}
            <td>
              {contact && <Button color="link" onClick={() => show(item, 'contact')} className="p-0"><Icon.Search size={20} /></Button>}
              <Can rule={`${resource}:edit`}><Link to={{ pathname: `/dashboard/${resource}/edit`, state: { placeholder: item } }}><Button color="link" className="p-0"><Icon.Edit2 size={20} /></Button></Link></Can>
              <Can rule={`${resource}:delete`}><Button onClick={() => show(item, 'remove')} color="link" className="p-0"><Icon.XCircle size={20} /></Button></Can>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default List
