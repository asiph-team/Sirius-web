import React from 'react'
import {
  Card, CardBody, CardHeader, CardTitle,
} from 'reactstrap'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Header, List, Error } from '../../../components/custom'
import { headers } from './_headers'

const ProgramsList = () => {
  const { data, loading, error } = useFetchResources('/api/v1/programs')
  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return (
    <>
      <Header title="Programas de vigilancia" icon="Video" />
      <Card className="mb-5">
        <CardHeader>
          <CardTitle>Trabajadores</CardTitle>
        </CardHeader>
        <CardBody>
          <List
            data={data && data.workers}
            headers={headers}
            resource="programs"
          />
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Puestos de trabajo</CardTitle>
        </CardHeader>
        <CardBody>
          <List
            data={data && data.jobs}
            headers={headers}
          />
        </CardBody>
      </Card>
    </>
  )
}

export default ProgramsList
