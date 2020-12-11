import React from 'react'
import 'rc-switch/assets/index.css'
import * as Icon from 'react-feather'
import { Card, CardBody } from 'reactstrap'
import moment from 'moment'

const ListCourse = (props) => {
  const { data } = props
  const compareDates = (date) => {
    const now = Date()
    return moment(date) > now ? 'Curso por realizar' : 'Curso realizado '
  }
  return (
    <>
      {
        data.map((item) => (
          <Card>
            <CardBody className="d-flex justify-content-between align-items-center">
              <h3>
                {compareDates(item.date)}
                {' '}
                {item.name}
              </h3>
              <div className="d-flex align-self-center">
                <h3 className="mr-1">
                  {moment(item.date).format('DD/MM/YYYY')}
                </h3>
                <Icon.ZoomIn size={24} />
              </div>
            </CardBody>
          </Card>
        ))
      }
    </>
  )
}

export default ListCourse
