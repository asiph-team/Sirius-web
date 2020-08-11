import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Header, List, Error } from '../../../components/custom'
import { headers } from './_headers'

const JobsList = () => {
  const { data, loading, error } = useFetchResources('/api/v1/jobs')
  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return (
    <>
      <Header title="Puestos de Trabajo" icon="Briefcase" />
      <Card>
        <CardBody>
          <List
            data={data}
            headers={headers}
            resource="jobs"
          />
        </CardBody>
      </Card>
    </>
  )
}

export default JobsList
