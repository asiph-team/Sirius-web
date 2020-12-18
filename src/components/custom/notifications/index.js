import React from 'react'
import { urlApi, baseApiUrl } from '../../../utility/helpers/consts'
import { useFetchResources } from '../../../utility/customHooks/resources'
import ListUI from './_list'

const Notification = () => {
  const { items: alerts } = useFetchResources(`${urlApi}${baseApiUrl}courses/today`)
  const { items: list } = alerts
  const programs = list ? list.data[0].programs : null
  const trainings = list ? list.data[0].trainings : null
  return (
    <>
      {
        list && <ListUI programs={programs} trainings={trainings} />
      }
    </>
  )
}

export default Notification
