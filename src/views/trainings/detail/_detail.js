import React, { useState } from 'react'
import {
  HeaderDetail, ListCourse,
} from '../../../components/custom'
import { CourseAssistance } from '../../../components/custom/modals'

import PaginationSeprated from '../../../components/custom/pagination'

const DetailUI = (props) => {
  const { data, pagination, temp, training } = props
  const [selected, setSelected] = useState({})
  const [visibility, setVisibility] = useState({ contact: false, remove: false })
  const show = (item, type, visible = true) => {
    setSelected(item)
    setVisibility({ ...visibility, [type]: visible })
  }
  return (
    <>
      <HeaderDetail detail={training} back="/dashboard/trainings" title="capacitaciones" />
      {
        data && (
          <ListCourse
            data={data.data.data}
            show={show}
          />
        )
      }
      {
        data && (
          <CourseAssistance
            visibility={visibility.contact}
            onClose={() => setVisibility({ ...visibility, contact: false })}
            item={selected}
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
