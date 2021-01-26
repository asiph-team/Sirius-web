import React from 'react'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Error } from '../../../components/custom'
import ListUI from './_listUI'

const ControlsList = (props) => {
  const { location: { state } } = props
  const url = 'control_measures'
  const { items: controls, removeControl, changeStatus, pagination, search, orderBy } = useFetchResources(`activities/${state.activity_id}/control_measures?`)
  const { items, loading, error, temp } = controls
  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return <ListUI data={items} remove={removeControl} ordering={orderBy} activity={state.activity_id} activityName={state.activity_name} search={search} temp={temp} changeStatus={changeStatus} pagination={pagination} url={url} error={error} />
}

export default ControlsList
