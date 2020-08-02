import React, {useState} from 'react'
import { Card, CardBody } from 'reactstrap'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import {ContactInfoModal} from '../../../components/custom/modals'
import {Header, List, Error} from '../../../components/custom'
import { headers } from './_headers';

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
            <Header title="Empresas" icon="Shield"/>
            <Card>
                <CardBody>
                    <List
                        data={data}
                        headers={headers}
                        showInfo={showContactInfo}
                    />
                </CardBody>
            </Card>
            <ContactInfoModal visibility={visibility} onClose={() => setVisibility(false)} item={selected}/>
        </>
    )
}

export default EnterpriseList