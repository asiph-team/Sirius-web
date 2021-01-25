import React from 'react'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Error } from '../../../components/custom'
import ListUI from './_listUI'
import { urlApi } from '../../../utility/helpers/consts'

const List = () => {
  const { items: programs, remove, pagination, search, orderBy } = useFetchResources('programs?')
  const { items, loading, error, temp } = programs
  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return <ListUI data={items} remove={remove} ordering={orderBy} orderBy temp={temp} search={search} pagination={pagination} />
}

export default List
