import React, { useState } from 'react'
import { Button, Card, CardBody, Table } from 'reactstrap'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import {Error} from '../../../components/custom'
import {ContactInfoModal} from '../../../components/custom/modals'
import Switch from 'react-switch'
import * as Icon from 'react-feather'

const List = props => {
    const { enterprises, error, loading } = props.data
    const [visibility, setVisibility] = useState(false)
    const [selected, setSelected] = useState({})

    if (loading) return <LoadingSpinner />
    if (error) return <Error message={error}/>
    return (
        <Card>
            <CardBody>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Nombre / Razón Social</th>
                            <th>Giro</th>
                            <th>Rubro</th>
                            <th>RUT</th>
                            <th>Email</th>
                            <th>Tamaño</th>
                            <th>Estado</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {enterprises && enterprises.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.heading}</td>
                                <td>{item.spin}</td>
                                <td>{item.RUT}</td>
                                <td>{item.size}</td>
                                <td><Switch onChange={() => console.log('hola')} checked={item.status} uncheckedIcon={false} checkedIcon={false} height={20} width={40}/></td>
                                <td>
                                    <Button color="link" onClick={() => {
                                        setSelected(item)
                                        setVisibility(true)
                                    }} className="p-0"><Icon.Search size={20} /></Button>
                                    <Button color="link" className="p-0"><Icon.Edit2 size={20} /></Button>
                                    <Button color="link" className="p-0"><Icon.XCircle size={20} /></Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </CardBody>
            <ContactInfoModal visibility={visibility} onClose={() => setVisibility(false)} item={selected}/>
        </Card>
    )
}

export default List