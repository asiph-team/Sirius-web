import React, { useEffect, useState } from 'react'
import { Card, CardBody } from 'reactstrap'
import { LoadingSpinner } from '../../components/@vuexy/Spinner'
import { filterParams, userData } from '../../utility/helpers/functions'
import { InfoTraining } from '../../components/custom/modals'
import {
  AlertDialog, Header, List,
} from '../../components/custom'
import { headers } from './_headers'
import PaginationSeprated from '../../components/custom/pagination'
import FormUI from './_form'

const ListUI = (props) => {
  const { data, remove, pagination, search, temp, ordering, areas, onLoading, employees, workstations, handleSubmit, firstDate, filter, filterEmployees, filterWorkstations, title, loadingAreas, loadingEmployees, loadingWorkstations, isLoading } = props
  const [selected, setSelected] = useState({})
  const [visibility, setVisibility] = useState({ contact: false, remove: false })
  const show = (item, type, visible = true) => {
    setSelected(item)
    setVisibility({ ...visibility, [type]: visible })
  }
  const transformData = () => data && data.data.data.map((item) => ({
    ...item,
    _risk_supervision_: item.risk,
    activity_name: item.activity.name,
    accident: item.accident ? 'Si' : 'No',
    worker_name: item.user ? `${item.user.name} ${item.user.lastname}` : '--',
    workstation: item.activity.workstation,
    area: item.activity.area,
  }))
  const { role } = userData()
  useEffect(() => {
    localStorage.setItem('date_start', firstDate.date_start)
    localStorage.setItem('date_end', firstDate.date_end)
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
    localStorage.setItem('area_id', '_all_')
    localStorage.setItem('workstation_id', '_all_')
    localStorage.setItem('employed_id', '_all_')
    return () => {
      localStorage.removeItem('date_start')
      localStorage.removeItem('date_end')
      localStorage.removeItem('area_id')
      localStorage.removeItem('workstation_id')
      localStorage.removeItem('employed_id')
    }

  }, [])
  return (
    <>
      <Header title={title} icon="Eye" />
      {
        data && areas && employees && workstations && (
          <>
            <FormUI
              title="Exportar"
              areas={areas}
              search={search}
              employees={employees}
              workstations={workstations}
              handleSubmit={handleSubmit}
              placeholder={{
                ...firstDate,
                area_id: role === 'chief_of_area' ? areas.data[0].id : localStorage.getItem('area_id'),
                workstation_id: localStorage.getItem('workstation_id'),
                employed_id: localStorage.getItem('employed_id'),
              }}
              filter={filter}
              filterEmployees={filterEmployees}
              filterWorkstations={filterWorkstations}
              loadingAreas={loadingAreas}
              loadingEmployees={loadingEmployees}
              loadingWorkstations={loadingWorkstations}
              ordering={ordering}
            />
          </>
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
                  resource="supervision"
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
