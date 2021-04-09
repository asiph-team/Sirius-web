import React from 'react'
import { useFetchResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { Error } from '../../../components/custom'
import SupervisionDetailUI from './_detailUI'

const SupervisionDetail = (props) => {
  const { location: { state: { data } } } = props
  const { items: controlMeasures } = useFetchResources(`/employed-activities/${data.id}/control_measures`)
  const { items, loading, error } = controlMeasures
  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return (
    <>
      {
        items && (
          <SupervisionDetailUI
            data={items.data.data}
            controlMeasure={data}
            {...props}
          />
        )
      }
    </>
  )
}

export default SupervisionDetail
