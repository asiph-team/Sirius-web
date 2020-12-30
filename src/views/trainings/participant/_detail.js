import React, { useState } from 'react'
import { Card, CardBody } from 'reactstrap'
import {
  HeaderSign, List,
} from '../../../components/custom'
import { CourseSignature } from '../../../components/custom/modals'
import PaginationSeprated from '../../../components/custom/pagination'
import { headers } from './_headers'

const DetailUI = (props) => {
  const { data, pagination, temp, training, updateSignature } = props
  const [selected, setSelected] = useState({})
  const [visibility, setVisibility] = useState({ contact: false, remove: false })
  const show = (item, type, visible = true) => {
    setSelected(item)
    setVisibility({ ...visibility, [type]: visible })
  }
  const transformData = () => {
    const newData = data.data.data.map((item) => {
      return {
        id: item.id,
        name: `${item.user.name} ${item.user.lastname}`,
        rut: item.user.rut,
        area: '--',
        workstation: '--',
        signature: item.signature,
        assistance: item.status === 'invited' ? 'Invitado' : 'Asistió',
      }
    })
    return newData
  }
  return (
    <>
      <HeaderSign detail={training} title="cursos" />
      <Card>
        <CardBody>
          {
            data && (
              <List
                headers={headers}
                data={transformData()}
                show={show}
                url="employees/"
              />
            )
          }
        </CardBody>
      </Card>
      {
        data && (
          <CourseSignature
            visibility={visibility.signature}
            onClose={() => setVisibility({ ...visibility, signature: false })}
            item={selected}
            data={data}
            updateSignature={updateSignature}
            title={training}
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
