import React from 'react'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Error } from '../../../components/custom'
import DashboardUI from './_dashboardUI'

const Admin = () => {
  const { items: performance, indicatorsParams } = useFetchResources('indicators?')
  const { items: areas } = useFetchResources('areas')
  const { items, loading, error, temp } = performance
  if (loading || !items) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return <DashboardUI performance={items} areas={areas} indicatorsParams={indicatorsParams} temp={temp} />
}

export default Admin
