import React from 'react'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Error } from '../../../components/custom'
import ListUI from './_listUI'
import { urlApi } from '../../../utility/helpers/consts'

const AreasList = () => {
  const { items: areas, remove, pagination } = useFetchResources(`${urlApi}/api/v1/areas`)
  const { items, loading, error } = areas
  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return <ListUI data={items} remove={remove} pagination={pagination} />
}

export default AreasList
