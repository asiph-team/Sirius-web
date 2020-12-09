import React from 'react'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Error } from '../../../components/custom'
import ListUI from './_listUI'
import { urlApi, baseApiUrl } from '../../../utility/helpers/consts'

const ControlsList = (props) => {
  const { location: { state } } = props
  const url = `${urlApi}${baseApiUrl}control_measures`
  const { items: controls, removeControl, changeStatus, pagination, search } = useFetchResources(`${urlApi}${baseApiUrl}activities/${state.activity_id}/control_measures?`)
  const { items, loading, error, temp } = controls
  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return <ListUI data={items} remove={removeControl} activity={state.activity_id} search={search} temp={temp} changeStatus={changeStatus} pagination={pagination} url={url} error={error} />
}

export default ControlsList
