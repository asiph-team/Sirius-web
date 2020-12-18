import React from 'react'
import ListUI from './_list'

const Notification = (props) => {
  const { alerts } = props
  const programs = alerts ? alerts.data[0].programs : null
  const trainings = alerts ? alerts.data[0].trainings : null
  return (
    <>
      {
        alerts && <ListUI programs={programs} trainings={trainings} />
      }
    </>
  )
}

export default Notification
