import React from 'react'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Error } from '../../../components/custom'
import ListUI from './_listUI'
import { urlApi } from '../../../utility/helpers/consts'

const ActionsList = () => {
  const { items: actions, remove, pagination, search, changeStatus } = useFetchResources(`${urlApi}/api/v1/actions?`)
  const { items, loading, error, temp } = actions
  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return <ListUI data={items} remove={remove} search={search} temp={temp} pagination={pagination} changeStatus={changeStatus} />
}

export default ActionsList
