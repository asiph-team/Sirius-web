import React from 'react'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Error } from '../../../components/custom'
import ListUI from './_listUI'
import { urlApi, baseApiUrl } from '../../../utility/helpers/consts'

const TrainingDetailList = (props) => {
  const { location: { state: { training } } } = props
  const { items: trainings, remove, pagination, search, orderBy } = useFetchResources(`${urlApi}${baseApiUrl}trainings/${training.id}/courses?`)
  const { items, loading, error, temp } = trainings
  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return <ListUI data={items} training={training} remove={remove} ordering={orderBy} search={search} temp={temp} pagination={pagination} />
}

export default TrainingDetailList
