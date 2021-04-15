import React, { useState } from 'react'
import {
  HeaderDetail, ListCourse,
} from '../../../components/custom'
import { MedicalSurveillance } from '../../../components/custom/modals'
import PaginationSeprated from '../../../components/custom/pagination'

const DetailUI = (props) => {
  const { data, pagination, temp, training } = props
  const [selected, setSelected] = useState({})
  const [visibility, setVisibility] = useState({ remove: false })
  const show = (item, type, visible = true) => {
    setSelected(item)
    setVisibility({ ...visibility, [type]: visible })
  }
  return (
    <>
      {
        training && <HeaderDetail detail={training.data} title="vigilancias médicas" back="/dashboard/programs" />
      }
      {
        data && (
          <ListCourse
            data={data.data.data}
            show={show}
            url="/dashboard/programs/participants"
            module="programs"
          />
        )
      }
      {
        visibility.contact && (
          <MedicalSurveillance
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
