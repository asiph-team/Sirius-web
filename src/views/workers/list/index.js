import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Header, List, Error } from '../../../components/custom'
import { headers } from './_headers'

const WorkersList = () => {
  const { items: workers, remove } = useFetchResources('/api/v1/workers')
  const { items, loading, error } = workers
  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return (
    <>
      <Header title="Trabajadores" icon="Users" />
      <Card>
        <CardBody>
          <List
            data={items}
            headers={headers}
            resource="workers"
          />
        </CardBody>
      </Card>
    </>
  )
}

export default WorkersList
