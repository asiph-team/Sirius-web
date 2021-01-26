import React, { useState } from 'react'
import { Card, CardBody } from 'reactstrap'
import moment from 'moment'
import { InfoTraining } from '../../../components/custom/modals'
import {
  AlertDialog, HeaderSummaryPrograms, List,
} from '../../../components/custom'
import { headers } from './_headers'
import PaginationSeprated from '../../../components/custom/pagination'

const ListUI = (props) => {
  const { data, remove, pagination, temp, ordering, summary } = props
  const [selected, setSelected] = useState({})
  const [visibility, setVisibility] = useState({ contact: false, remove: false })
  const show = (item, type, visible = true) => {
    setSelected(item)
    setVisibility({ ...visibility, [type]: visible })
  }
  const transformData = () => data.data.data.map((item) => ({
    name: item.name,
    course: item.course.name,
    date: item.date ? moment(item.date).format('DD/MM/YYYY') : '',
    assisted: item.assisted,
  }))
  return (
    <>
      {
        summary && <HeaderSummaryPrograms detail={summary.data} />
      }
      <Card>
        <CardBody>
          {
            data && (
              <List
                data={transformData()}
                headers={headers}
                show={show}
                resource="trainings"
                ordering={ordering}
              />
            )
          }
        </CardBody>
      </Card>
      {
        visibility.remove && (
          <InfoTraining
            visibility={visibility.contact}
            onClose={() => setVisibility({ ...visibility, contact: false })}
            item={selected}
          />
        )
      }
      {
        visibility.remove && (
          <AlertDialog
            title={`¿Estás seguro de eliminar la capacitación "${selected.name}"?`}
            paragraph="Estas operación es irreversible, se eliminará toda la información relacionada a la capacitación."
            callback={() => remove({ id: selected.id }, null)}
            callbackCancel={() => setVisibility({ ...visibility, remove: false })}
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
