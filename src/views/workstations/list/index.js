import React from 'react'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Error } from '../../../components/custom'
import ListUI from './_listUI'

const List = () => {
  const { items: workstations, remove, pagination, search, orderBy } = useFetchResources('workstations?')
  const { items, loading, error, temp } = workstations
  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return <ListUI data={items} remove={remove} ordering={orderBy} search={search} temp={temp} pagination={pagination} />
}

export default List
