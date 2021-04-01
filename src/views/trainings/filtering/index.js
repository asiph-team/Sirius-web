import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { useFetchResources, usePostResources } from '../../../utility/customHooks/resources'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { AlertError, AlertSuccessDownload } from '../../../components/custom'

import { Error, AlertLoading } from '../../../components/custom'
import ListUI from './_listUI'
import { singleDateFormatter, filterParams as urlGenerator } from '../../../utility/helpers/functions'

const FilteringList = () => {
  const todayInitial = moment(new Date(), 'YYYY-MM-DD').toDate()
  const todayEnd = new Date()
  const [dateStart, setDateStart] = useState(todayInitial.setDate(todayInitial.getDate() - 30))
  const [dateEnd, setDateEnd] = useState(todayEnd.setDate(todayEnd.getDate() - 1))
  const url = '/trainings/employed/assistance/export'
  const { data: { loading: loadingPost, items: itemsPost, error: errorPost }, getExport, clean } = usePostResources()
  const {
    items: trainings,
    remove,
    pagination,
    search,
    queryParams,
    filterParams,
    orderBy,
  } = useFetchResources(`trainings/employed/assistance`)
  const { items, loading, error, filter } = trainings
  // Areas
  const { items: areasData } = useFetchResources('areas?all')
  const { items: areasList, loading: loadingAreas } = areasData
  // Workers
  const { items: employees, filterParams: filterEmployees } = useFetchResources('/areas/workstations/employees')
  const { items: employeesData, loading: loadingEmployees } = employees
  //if (loading || loadingAreas) return <LoadingSpinner />
  // Workstations
  const { items: workstations, filterParams: filterWorkstations } = useFetchResources('workstations')
  const { items: workstationsData, loading: loadingWorkstations } = workstations
  const handleDownload = (link) => {
    clean()
    document.body.appendChild(link)
    link.click()
    link.remove()
  }
  return (
    <>
      <ListUI
        handleSubmit={(values) => getExport(
          {
            ...values,
            date_start: moment(values.date_start).format('DD-MM-YYYY'),
            date_end: moment(values.date_end).format('DD-MM-YYYY'),
            area_id: values.area_id === 'Todas' ? null : values.area_id,
            workstation_id: values.workstation_id === 'Todos' ? null : values.workstation_id,
            employed_id: values.employed_id === 'Todos' ? null : values.employed_id,
          }, url,
        )}
        areas={areasList}
        data={items}
        remove={remove}
        ordering={orderBy}
        search={filterParams}
        filter={filter}
        pagination={pagination}
        onLoading={loading || loadingAreas || loadingEmployees || loadingWorkstations}
        employees={employeesData}
        workstations={workstationsData}
        firstDate={
          {
            date_start: moment(dateStart).format('YYYY-MM-DD'),
            date_end: moment(dateEnd).format('YYYY-MM-DD'),
          }
        }
        filterEmployees={filterEmployees}
        filterWorkstations={filterWorkstations}
      />
      {loadingPost && <AlertLoading message="Generando reporte" />}
      {itemsPost && (
        <AlertSuccessDownload
          message="El reporte ha sido creado."
          callback={() => handleDownload(itemsPost)}
          callBackCancel={() => clean()}
        />
      )}
    </>
  )
}

export default FilteringList
