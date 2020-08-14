import React from 'react'
import { Button, Table } from 'reactstrap'
import Switch from 'react-switch'
import * as Icon from 'react-feather'
import Can from '../can'

const CustomSwitch = (props) => {
  const { status } = props
  return (
    <Switch
      onChange={() => console.log('hola')}
      checked={status}
      uncheckedIcon={false}
      checkedIcon={false}
      height={20}
      width={40}
    />
  )
}

const List = (props) => {
  const {
    headers, data, show, resource,
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
              const content = header.id === 'status' ? <CustomSwitch status={item.status} /> : item[header.id]
              return <td key={item.id + Math.random()}>{content}</td>
            })}
            <td>
              {show && <Button color="link" onClick={() => show(item, 'contact')} className="p-0"><Icon.Search size={20} /></Button>}
              <Can rule={`${resource}:edit`}><Button color="link" className="p-0"><Icon.Edit2 size={20} /></Button></Can>
              <Can rule={`${resource}:delete`}><Button onClick={() => show(item, 'remove')} color="link" className="p-0"><Icon.XCircle size={20} /></Button></Can>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default List
