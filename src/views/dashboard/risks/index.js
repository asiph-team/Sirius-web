import React from 'react'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Error } from '../../../components/custom'
import RiskUI from './_risksUI'
import { urlApi, baseApiUrl } from '../../../utility/helpers/consts'

const Risk = (props) => {
  const { data } = props
  const url = `${urlApi + baseApiUrl}activities/indicators?`
  const newUrl = (data.area == null || !data.area) ? `${url}date_start=${data.dateStart}&date_end=${data.dateEnd}` : `${url}date_start=${data.dateStart}&date_end=${data.dateEnd}&area_id=${data.area}`
  const { items: performance } = useFetchResources(newUrl)
  const { items, loading, error } = performance
  if (loading || !items) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return <RiskUI performance={items} />
}

export default Risk
