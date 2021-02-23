import React, { useState } from 'react'
import { Card, CardBody } from 'reactstrap'
import moment from 'moment'
import {
  AlertSuccess,
  HeaderSign, List,
} from '../../../components/custom'
import { CourseSignature, TrainerSignature } from '../../../components/custom/modals'
import PaginationSeprated from '../../../components/custom/pagination'
import { headers } from './_headers'

const DetailUI = (props) => {
  const { data, pagination, temp, training, updateSignature, cleanTempState } = props
  const [selected, setSelected] = useState({})
  const [visibility, setVisibility] = useState({ contact: false, remove: false })
  const show = (item, type, visible = true) => {
    setSelected(item)
    setVisibility({ ...visibility, [type]: visible })
  }
  const transformData = () => data.data.data.map((item) => ({
    id: item.id,
    name: `${item.user.name} ${item.user.lastname}`,
    rut: item.user.rut,
    area: item.user.area ? item.user.area.name : null,
    workstation: item.user.workstation ? item.user.workstation.name : null,
    signature: item.signature,
    date_signature: item.date_signature ? moment(item.date_signature, 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY') : '',
    assistance: item.status === 'invited' ? 'Invitado' : 'Asistió',
  }))
  return (
    <>
      <HeaderSign detail={training} title="cursos" relator show={show} />
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
      {temp && (
        <AlertSuccess
          message="Se ha firmado exitosamente"
          callback={() => { cleanTempState() }}
        />
      )}
      {
        data && (
          <TrainerSignature
            visibility={visibility.trainerSignature}
            onClose={() => setVisibility({ ...visibility, trainerSignature: false })}
            label="Capacitaciones"
            view="trainings"
            item={training}
          />
        )
      }
      {
        data && (
          <CourseSignature
            label="Capacitaciones"
            view="trainings"
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
