import React from 'react'
import { Button, Table } from 'reactstrap'
import Switch from 'react-switch'
import * as Icon from 'react-feather'

const CustomSwitch = (props) => (
    <Switch
        onChange={() => console.log('hola')}
        checked={props.status}
        uncheckedIcon={false}
        checkedIcon={false}
        height={20}
        width={40}/
    >
)

const List = props => {
    const { headers, data, showInfo } = props
    return (
        <Table responsive>
            <thead>
                <tr>{headers.map(header => <th>{header.title}</th>)}</tr>
            </thead>
            <tbody>
                {data && data.map(item =>
                    <tr key={item.id}>
                        {headers.map(header => {
                            let content = header.id === 'status' ? <CustomSwitch status={item.status} /> : item[header.id]
                            return <td>{content}</td>
                        })}
                        <td>
                            {showInfo && <Button color="link" onClick={() => showInfo(item)} className="p-0"><Icon.Search size={20} /></Button>}
                            <Button color="link" className="p-0"><Icon.Edit2 size={20} /></Button>
                            <Button color="link" className="p-0"><Icon.XCircle size={20} /></Button>
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}

export default List