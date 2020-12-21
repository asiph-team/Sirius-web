import React from 'react'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Error } from '../../../components/custom'
import DetailUI from './_detail'
import { urlApi, baseApiUrl } from '../../../utility/helpers/consts'

const ParticipantList = (props) => {
  const { location: { state: { item } } } = props
  const {
    items: trainings, remove, pagination, search, orderBy, updateSignature
  } = useFetchResources(`${urlApi}${baseApiUrl}programs/courses/${item.id}/assistance`)
  const {
    items, loading, error, temp,
  } = trainings
  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return (
    <DetailUI
      data={items}
      training={item}
      remove={remove}
      ordering={orderBy}
      search={search}
      temp={temp}
      pagination={pagination}
      updateSignature={updateSignature}
    />
  )
}

export default ParticipantList
