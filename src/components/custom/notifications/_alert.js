import React from 'react'
import moment from 'moment'
import {
  Media,
} from 'reactstrap'
import * as Icon from 'react-feather'
import 'moment/locale/es-us'
import { Link } from 'react-router-dom'

moment().locale('es')

const AlertUI = (props) => {
  const { item, title, icon, url } = props
  const IconTag = Icon[icon]
  return (
    <>
      {
        item.map((alert) => (
          <div className="d-flex justify-content-between">
            <Media className="d-flex align-items-start">
              <Link to={url}>
                <Media left href="#">
                  <IconTag
                    className="font-medium-5 primary"
                    size={21}
                  />
                </Media>
              </Link>
              <Media body>
                <Media
                  heading
                  className="primary media-heading"
                  tag="h6"
                >
                  {title}
                </Media>
                <small className="notification-text">
                  {alert[0].name}
                </small>
              </Media>
              <small>
                <time
                  className="media-meta"
                >
                  {moment(alert[0].date, 'YYYY-MM-DD').fromNow()}
                </time>
              </small>
            </Media>
          </div>
        ))
      }
    </>
  )
}

export default AlertUI
