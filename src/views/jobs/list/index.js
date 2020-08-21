import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Header, List, Error } from '../../../components/custom'
import { headers } from './_headers'

const JobsList = () => {
  const { items: jobs, remove } = useFetchResources('/api/v1/jobs')
  const { items, loading, error } = jobs
  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return (
    <>
      <Header title="Puestos de Trabajo" icon="Briefcase" />
      <Card>
        <CardBody>
          <List
            data={items}
            headers={headers}
            resource="jobs"
          />
        </CardBody>
      </Card>
    </>
  )
}

export default JobsList
