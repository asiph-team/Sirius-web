import React from 'react'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Error } from '../../../components/custom'
import ListUI from './_listUI'

const EmployeesList = () => {
  const { items: employees, remove, changeStatus } = useFetchResources('/api/v1/employees')
  const { items, loading, error } = employees
  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return <ListUI data={items} remove={remove} changeStatus={changeStatus} />
}

export default EmployeesList
