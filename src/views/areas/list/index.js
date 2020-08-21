import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Header, List, Error } from '../../../components/custom'
import { headers } from './_headers'

const AreasList = () => {
  const { items: areas, remove } = useFetchResources('/api/v1/areas')
  const { items, loading, error } = areas
  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return (
    <>
      <Header title="Áreas de trabajo" icon="Box" />
      <Card>
        <CardBody>
          <List
            data={items}
            headers={headers}
            resource="areas"
          />
        </CardBody>
      </Card>
    </>
  )
}

export default AreasList
