import React, {useState} from 'react'
import { Button, Card, CardBody } from 'reactstrap'
import {Link} from 'react-router-dom'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import {ContactInfoModal} from '../../../components/custom/modals'
import {Header, List, Error} from '../../../components/custom'
import {PlusCircle} from 'react-feather'
import { headers } from './_headers'

const EnterpriseList = () => {
    const {data, loading, error} = useFetchResources('/api/v1/enterprises')
    const [visibility, setVisibility] = useState(false)
    const [selected, setSelected] = useState({})
    const showContactInfo = (item) => {
        setSelected(item)
        setVisibility(true)
    }

    if (loading) return <LoadingSpinner />
    if (error) return <Error message={error}/>
    return (
        <>
            <Header title="Empresas" icon="Shield">
                <Link to="/dashboard/enterprises/add">
                    <Button color="primary"><PlusCircle size={14} />&nbsp;Agregar empresa</Button>
                </Link>
            </Header>
            <Card>
                <CardBody>
                    <List
                        data={data}
                        headers={headers}
                        showInfo={showContactInfo}
                        resource="enterprises"
                    />
                </CardBody>
            </Card>
            <ContactInfoModal visibility={visibility} onClose={() => setVisibility(false)} item={selected}/>
        </>
    )
}

export default EnterpriseList