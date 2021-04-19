import React, { useState } from 'react'
import moment from 'moment'
import { useFetchResources, usePostResources } from '../../utility/customHooks/resources'
import { AlertSuccessDownload, AlertLoading } from '../../components/custom'

import ListUI from './_listUI'

const FilteringList = () => {
  const todayInitial = moment(new Date(), 'YYYY-MM-DD').toDate()
  const todayEnd = new Date()
  const [dateStart, setDateStart] = useState(todayInitial.setDate(todayInitial.getDate() - 30))
  const [dateEnd, setDateEnd] = useState(todayEnd.setDate(todayEnd.getDate() - 1))
  const url = '/areas/workstations/employees/employed-activities/export'
  const { data: { loading: loadingPost, items: itemsPost, error: errorPost }, postExport, clean } = usePostResources()
  const {
    items: trainings,
    remove,
    paginationFilter,
    filterParams,
    orderBy,
  } = useFetchResources('/areas/workstations/employees/employed-activities?')

  const { items, loading, error, filter, temp } = trainings
  // Areas
  const { items: areasData } = useFetchResources('areas?all')
  const { items: areasList, loading: loadingAreas } = areasData
  // Workers
  const { items: employees, filterParams: filterEmployees } = useFetchResources('/areas/workstations/employees?all')
  const { items: employeesData, loading: loadingEmployees } = employees

  // Workstations
  const { items: workstations, filterParams: filterWorkstations } = useFetchResources('workstations?all')
  const { items: workstationsData, loading: loadingWorkstations } = workstations
  const handleDownload = (link) => {
    clean()
    //document.body.appendChild(link)
    link.click()
    //link.remove()
  }
  return (
    <>
      <ListUI
        title="Supervisión"
        handleSubmit={(values) => postExport(
          {
            date_start: moment(values.date_start).format('DD-MM-YYYY'),
            date_end: moment(values.date_end).format('DD-MM-YYYY'),
            ...(localStorage.getItem('area_id') !== '_all_' && { area_id: localStorage.getItem('area_id') }),
            ...(localStorage.getItem('workstation_id') !== '_all_' && { workstation_id: localStorage.getItem('workstation_id') }),
            ...(localStorage.getItem('employed_id') !== '_all_' && { employed_id: localStorage.getItem('employed_id') }),
          }, url,
        )}
        areas={areasList}
        data={items}
        remove={remove}
        ordering={orderBy}
        search={filterParams}
        filter={filter}
        pagination={paginationFilter}
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
        temp={temp}
        loadingAreas={loadingAreas}
        loadingEmployees={loadingEmployees}
        loadingWorkstations={loadingWorkstations}
        isLoading={loadingAreas || loading || loadingEmployees}
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
