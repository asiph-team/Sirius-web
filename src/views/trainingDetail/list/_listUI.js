import React from 'react'
import {
  HeaderTrainingDetail, ListCourse,
} from '../../../components/custom'
import PaginationSeprated from '../../../components/custom/pagination'

const ListUI = (props) => {
  const { data, pagination, temp, training } = props

  return (
    <>
      <HeaderTrainingDetail detail={training} icon="Clipboard" />
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

export default ListUI
