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
      {
        training && <HeaderDetail detail={training.data} back="/dashboard/trainings" title="capacitaciones" />
      }
      {
        data && training && (
          <ListCourse
            data={data.data.data}
            show={show}
            url="/dashboard/trainings/participants"
            instance={training.data}
          />
        )
      }
      {
        visibility.contact && (
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
