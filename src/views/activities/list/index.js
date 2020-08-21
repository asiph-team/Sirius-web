import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Header, List, Error } from '../../../components/custom'
import { headers } from './_headers'

const ActivitiesList = () => {
  const { items: activities, remove } = useFetchResources('/api/v1/activities')
  const { items, loading, error } = activities
  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return (
    <>
      <Header title="Actividades" icon="Activity" />
      <Card>
        <CardBody>
          <List
            data={items}
            headers={headers}
            resource="activities"
          />
        </CardBody>
      </Card>
    </>
  )
}

export default ActivitiesList
