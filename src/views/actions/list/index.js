import React from 'react'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Error } from '../../../components/custom'
import ListUI from './_listUI'

const ActionsList = () => {
  const { items: actions, remove } = useFetchResources('/api/v1/actions')
  const { items, loading, error } = actions
  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error} />
  console.log(items)
  return <ListUI data={items} remove={remove} />
}

export default ActionsList
