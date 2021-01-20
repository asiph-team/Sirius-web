import React, { useState } from 'react'
import { Card, CardBody } from 'reactstrap'
import moment from 'moment'
import {
  AlertDialog,
  AlertSuccess,
  HeaderSign, List,
} from '../../../components/custom'
import { CourseSignature } from '../../../components/custom/modals'
import PaginationSeprated from '../../../components/custom/pagination'
import { headers } from './_headers'

const DetailUI = (props) => {
  const { data, pagination, temp, training, updateSignature, cleanTempState, changeStatus } = props
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
        area: item.user.area ? item.user.area.name : null,
        workstation: item.user.workstation ? item.user.workstation.name : null,
        signature: item.signature,
        assisted: item.assisted,
        date_signature: item.date_signature ? moment(item.date_signature, 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY') : '',
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
                resource="programs_participants"
                data={transformData()}
                show={show}
                url="participants/"
              />
            )
          }
        </CardBody>
      </Card>
      {
        visibility.status && (
          <AlertDialog
            title={`¿Estás seguro de actualizar el estado del exámen de ${selected.name} como ${!selected.assisted ? 'rendido' : 'pendiente'}?`}
            paragraph={`Esta operación dejara el exámen como ${!selected.assisted ? 'rendido' : 'pendiente'} en la plataforma.`}
            callback={() => {
              changeStatus(
                {
                  id: selected.id,
                  assisted: !selected.assisted,
                }, 'assisted',
              )
              setVisibility({ ...visibility, status: false })
            }}
            callbackCancel={() => setVisibility({ ...visibility, status: false })}
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
