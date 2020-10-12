import React from 'react'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Error } from '../../../components/custom'
import DashboardUI from './_dashboardUI'
import { urlApi } from '../../../utility/helpers/consts'

const Admin = () => {
  const { items: performance } = useFetchResources(`${urlApi}/api/v1/indicators`)
  const { items, loading, error } = performance
  if (loading || !items) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return <DashboardUI performance={items} />
}

export default Admin
