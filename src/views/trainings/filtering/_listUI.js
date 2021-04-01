import React, { useEffect, useState } from 'react'
import { Card, CardBody } from 'reactstrap'
import moment from 'moment'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { filterParams } from '../../../utility/helpers/functions'
import { InfoTraining } from '../../../components/custom/modals'
import {
  AlertDialog, Header, List,
} from '../../../components/custom'
import { headers } from './_headers'
import PaginationSeprated from '../../../components/custom/pagination'
import FormUI from './_form'

const ListUI = (props) => {
  const { data, remove, pagination, search, temp, ordering, areas, onLoading, employees, workstations, handleSubmit, firstDate, filter, filterEmployees, filterWorkstations } = props
  const [selected, setSelected] = useState({})
  const [visibility, setVisibility] = useState({ contact: false, remove: false })
  const show = (item, type, visible = true) => {
    setSelected(item)
    setVisibility({ ...visibility, [type]: visible })
  }
  const transformData = () => data.data.data.map((item) => ({
    ...item,
    course_date: moment(item.course_date).format('DD/MMYYY'),
    employed_name: `${`${item.employed_name} ${item.employed_lastname}`}`,
    course_relator_name: item.course_relator_name ? item.course_relator_name : '--',
    course_relator_rut: item.course_relator_rut ? item.course_relator_rut : '--',
  }))
  useEffect(() => {
    search(
      filterParams(
        {
          date_start: firstDate.date_start,
          date_end: firstDate.date_end,
        },
        {
          date_start: firstDate.date_start,
          date_end: firstDate.date_end,
        },
      ),
      {
        date_start: firstDate.date_start,
        date_end: firstDate.date_end,
      },
    )
  }, [])
  return (
    <>
      <Header title="Exportar Capacitaciones" icon="FileText" />
      {
        areas && employees && workstations && (
          <FormUI
            title="Exportar"
            areas={areas}
            search={search}
            employees={employees}
            workstations={workstations}
            handleSubmit={handleSubmit}
            placeholder={{
              ...firstDate,
              area_id: 'Todas',
              workstation_id: 'Todos',
              employed_id: 'Todos',
            }}
            filter={filter}
            filterEmployees={filterEmployees}
            filterWorkstations={filterWorkstations}
          />
        )
      }
      <Card>
        <CardBody>
          {
            areas && onLoading ? (
              <CardBody style={{ height: '300px' }}>
                <LoadingSpinner />
              </CardBody>
            ) : (

              data && (
                <List
                  data={transformData()}
                  headers={headers}
                  show={show}
                  resource="trainings"
                  ordering={ordering}
                />
              )

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
