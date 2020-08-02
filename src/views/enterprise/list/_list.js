import React from 'react'
import { Card, CardBody, Table } from 'reactstrap'
import {Loader, Error} from '../../../components/custom'

const List = props => {
    const { enterprises, error, loading } = props.data
    if (loading) return <Loader />
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
                                <td>{item.email}</td>
                                <td>{item.size}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    )
}

export default List