import React from 'react'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Error } from '../../../components/custom'
import ListUI from './_listUI'

const EmployeesList = () => {
  const url = 'employees'
  const { items: employees, remove, changeStatus, pagination, search, orderBy } = useFetchResources('employees?')
  const { items, loading, error, temp } = employees
  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return <ListUI data={items} remove={remove} ordering={orderBy} search={search} temp={temp} changeStatus={changeStatus} pagination={pagination} url={url} error={error} />
}

export default EmployeesList
