import React from 'react'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Error } from '../../../components/custom'
import DetailUI from './_detail'
import { urlApi, baseApiUrl } from '../../../utility/helpers/consts'

const ProgramsDetail = (props) => {
  const { location: { state: { training } } } = props
  const { items: trainings, remove, pagination, search, orderBy } = useFetchResources(`${urlApi}${baseApiUrl}programs/${training.id}/courses?`)
  const { items, loading, error, temp } = trainings
  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return <DetailUI data={items} training={training} remove={remove} ordering={orderBy} search={search} temp={temp} pagination={pagination} />
}

export default ProgramsDetail
