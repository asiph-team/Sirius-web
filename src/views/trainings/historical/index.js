import React from 'react'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Error } from '../../../components/custom'
import ListUI from './_listUI'
import { urlApi, baseApiUrl } from '../../../utility/helpers/consts'

const TrainingsHistorical = (props) => {
  const { match: { params: { employeeId } } } = props
  console.log('props', props)
  const {
    items: trainings,
    remove,
    pagination,
    search,
    orderBy,
  } = useFetchResources(`${urlApi}${baseApiUrl}employees/${employeeId}/trainings/courses/assistance?`)
  const {
    items,
    loading,
    error,
    temp,
  } = trainings
  const employee = 0
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
      employee={employee}
    />
  )
}

export default TrainingsHistorical
