import React from 'react'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Error } from '../../../components/custom'
import DetailUI from './_detail'

const TrainingDetailList = (props) => {
  const { match: { params: { trainingId } } } = props
  const { items: trainings, remove, pagination, search, orderBy } = useFetchResources(`trainings/${trainingId}/courses?`)
  const { items, loading, error, temp } = trainings
  const { items: summary, loading: loadingTraining } = useFetchResources(`trainings/${trainingId}`)
  const { items: summaryData } = summary
  if (loading || loadingTraining) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return (
    <DetailUI
      data={items}
      training={summaryData}
      remove={remove}
      ordering={orderBy}
      search={search}
      temp={temp}
      pagination={pagination}
    />
  )
}

export default TrainingDetailList
