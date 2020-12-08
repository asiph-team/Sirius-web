import React from 'react'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Error } from '../../../components/custom'
import ListUI from './_listUI'
import { urlApi } from '../../../utility/helpers/consts'

const EnterpriseList = () => {
  const {
    items: enterprises,
    remove,
    changeStatus,
    pagination,
    search,
  } = useFetchResources(`${urlApi}/api/v1/enterprises?`)
  const {
    items,
    loading,
    error,
    temp,
  } = enterprises
  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return (
    <ListUI
      data={items}
      search={search}
      temp={temp}
      remove={remove}
      changeStatus={changeStatus}
      pagination={pagination}
    />
  )
}

export default EnterpriseList
