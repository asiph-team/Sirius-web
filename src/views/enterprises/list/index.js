import React, { useState } from 'react'
import { Button, Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import { PlusCircle } from 'react-feather'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { ContactInfoModal } from '../../../components/custom/modals'
import { Header, List, Error } from '../../../components/custom'
import { headers } from './_headers'

const EnterpriseList = () => {
  const { data, loading, error } = useFetchResources('/api/v1/enterprises')
  const [selected, setSelected] = useState({})
  const [visibility, setVisibility] = useState({ contact: false, remove: false })
  const show = (item, type, visible = true) => {
    setSelected(item)
    setVisibility({ ...visibility, [type]: visible })
  }

  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return (
    <>
      <Header title="Empresas" icon="Shield">
        <Link to="/dashboard/enterprises/add">
          <Button color="primary">
            <PlusCircle size={14} />
                &nbsp;Agregar empresa
          </Button>
        </Link>
      </Header>
      <Card>
        <CardBody>
          <List
            data={data}
            headers={headers}
            showInfo={show}
            resource="enterprises"
          />
        </CardBody>
      </Card>
      <ContactInfoModal
        visibility={visibility.contact}
        onClose={() => setVisibility({ ...visibility, contact: false })}
        item={selected}
      />
    </>
  )
}

export default EnterpriseList
