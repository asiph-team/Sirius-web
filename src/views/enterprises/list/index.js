import React from 'react'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Error } from '../../../components/custom'
import ListUI from './_listUI'

const EnterpriseList = () => {
  const { items: enterprises, remove } = useFetchResources('/api/v1/enterprises')
  const { items, loading, error } = enterprises
  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return <ListUI data={items} remove={remove} />
}

export default EnterpriseList
