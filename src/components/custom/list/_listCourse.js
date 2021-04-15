import React from 'react'
import 'rc-switch/assets/index.css'
import * as Icon from 'react-feather'
import { Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'

import moment from 'moment'

const ListCourse = (props) => {
  const { data, show, url, instance, module } = props
  const compareDates = (date) => {
    const now = Date()
    return moment(date) > moment(now) ? 'Por realizar' : 'Realizado '
  }
  return (
    <>
      {
        data.map((item) => (
          <Card key={item.id}>
            <CardBody className="d-flex justify-content-between align-items-center">
              <h3>
                {module !== 'programs' && compareDates(item.date)}
                {' '}
                {item.name}
              </h3>
              <div className="d-flex align-self-center">
                <h3 className="mr-1">
                  {moment(item.date).format('DD/MM/YYYY')}
                </h3>
                {
                  (url !== null)
                    ? (
                      <Link to={{ pathname: url, state: { item, instance } }}>
                        <Icon.ZoomIn size={24} className="cursor-pointer" />
                      </Link>
                    ) : (
                      <Icon.ZoomIn size={24} onClick={() => show(item, 'contact')} className="cursor-pointer" />
                    )
                }
              </div>
            </CardBody>
          </Card>
        ))
      }
    </>
  )
}

export default ListCourse
