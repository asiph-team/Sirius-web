import React from 'react'
import {
  UncontrolledDropdown,
  Badge,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap'
import * as Icon from 'react-feather'
import PerfectScrollbar from 'react-perfect-scrollbar'
import AlertUI from './_alert'

const ListUI = (props) => {
  const { programs, trainings } = props
  return (
    <UncontrolledDropdown
      className="dropdown-notification nav-item"
      tag="li"
    >
      <DropdownToggle
        tag="a"
        data-toggle="dropdown"
        aria-expanded={false}
        className="nav-link nav-link-label"
      >
        <Icon.Bell size={21} />
        <Badge pill color="primary" className="badge-up">
          {(programs.length + trainings.length) ? ` ${programs.length + trainings.length} ` : ''}
        </Badge>
      </DropdownToggle>
      <DropdownMenu
        tag="ul"
        right
        className="dropdown-menu-media"
      >
        <li className="dropdown-menu-header">
          <div className="dropdown-header mt-0">
            <h3 className="text-white">{programs.length + trainings.length} Pendientes</h3>
          </div>
        </li>
        <PerfectScrollbar
          className="media-list overflow-hidden position-relative"
          options={{
            wheelPropagation: false,
          }}
        >
          {
            trainings && <AlertUI title="Capacitaciones" icon="Clipboard" url="/dashboard/activities" item={trainings} />
          }
          {
            programs && <AlertUI title="Vigilancia médica" icon="Video" url="/dashboard/programs" item={programs} />
          }

        </PerfectScrollbar>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default ListUI
