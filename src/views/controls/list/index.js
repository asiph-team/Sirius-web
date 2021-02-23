import React from 'react'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Error } from '../../../components/custom'
import ListUI from './_listUI'

const ControlsList = (props) => {
  const { match: { params: { activityId } } } = props
  const url = 'control_measures'
  const { items: controls, removeControl, changeStatus, pagination, search, orderBy } = useFetchResources(`activities/${activityId}/control_measures?`)
  const { items, loading, error, temp } = controls
  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return <ListUI data={items} remove={removeControl} ordering={orderBy} activity={activityId} search={search} temp={temp} changeStatus={changeStatus} pagination={pagination} url={url} error={error} />
}

export default ControlsList
