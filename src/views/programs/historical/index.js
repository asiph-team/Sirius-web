import React from 'react'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Error } from '../../../components/custom'
import ListUI from './_listUI'

const TrainingsHistorical = (props) => {
  const { match: { params: { employeeId } } } = props
  const {
    items: trainings,
    remove,
    pagination,
    search,
    orderBy,
  } = useFetchResources(`employees/${employeeId}/programs/courses/assistance?`)
  const { items: summary } = useFetchResources(`employees/${employeeId}/programs/courses/assistance/summary`)
  const { items, loading, error, temp } = trainings
  const { items: summaryData } = summary
  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return (
    <ListUI
      data={items}
      remove={remove}
      ordering={orderBy}
      search={search}
      temp={temp}
      pagination={pagination}
      summary={summaryData}
    />
  )
}

export default TrainingsHistorical
