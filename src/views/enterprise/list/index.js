import React from 'react'
import { useFetchEnterprises } from '../../../utility/customHooks/enterprises'
import {Header} from '../../../components/custom'
import List from './_list'

const EnterpriseList = () => {
    const data = useFetchEnterprises()
    return (
        <>
            <Header title="Empresas" icon="Shield"/>
            <List data={data} />
        </>
    )
}

export default EnterpriseList