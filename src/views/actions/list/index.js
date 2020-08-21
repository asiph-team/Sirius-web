import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Header, List, Error } from '../../../components/custom'
import { headers } from './_headers'

const WorkersList = () => {
  const { items: actions, remove } = useFetchResources('/api/v1/actions')
  const { items, loading, error } = actions
  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return (
    <>
      <Header title="Planes de acción" icon="BookOpen" />
      <Card>
        <CardBody>
          <List
            data={items}
            headers={headers}
            resource="actions"
          />
        </CardBody>
      </Card>
    </>
  )
}

export default WorkersList
