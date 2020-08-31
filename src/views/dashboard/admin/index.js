import React from 'react'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Error } from '../../../components/custom'
import DashboardUI from './_dashboardUI'

const Admin = () => {
  const { items: performance } = useFetchResources('/api/v1/dashboard/admin')
  const { items, loading, error } = performance
  if (loading || !items) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return <DashboardUI performance={items} />
}

export default Admin
