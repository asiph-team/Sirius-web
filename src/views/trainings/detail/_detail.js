import React from 'react'
import {
  HeaderDetail, ListCourse,
} from '../../../components/custom'
import PaginationSeprated from '../../../components/custom/pagination'

const DetailUI = (props) => {
  const { data, pagination, temp, training } = props

  return (
    <>
      <HeaderDetail detail={training} back="/dashboard/trainings" title="capacitaciones" />
      {
        data && (
          <ListCourse
            data={data.data.data}
          />
        )
      }
      {
        data && (
          <PaginationSeprated data={data.data} pagination={pagination} temp={temp} param="filter" />
        )
      }
    </>
  )
}

export default DetailUI
