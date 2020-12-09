import React from 'react'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Error } from '../../../components/custom'
import ListUI from './_listUI'
import { urlApi } from '../../../utility/helpers/consts'

const TrainingsList = () => {
  const { items: trainings, remove, pagination, search } = useFetchResources(`${urlApi}/api/v1/trainings?`)
  const { items, loading, error, temp } = trainings
  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return <ListUI data={items} remove={remove} search={search} temp={temp} pagination={pagination} />
}

export default TrainingsList
