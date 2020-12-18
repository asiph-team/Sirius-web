import React, { useState } from 'react'
import {
  DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown,
} from 'reactstrap'
import * as Icon from 'react-feather'
import { UpdateUserPassword, RecoveryUserPassword } from '../../../components/custom/modals'
import { profiles } from '../../../utility/helpers/consts'
import { Notification } from '../../../components/custom'

const UserDropdown = (props) => {
  const { handleLogout, user, updateValidPassword } = props
  const [visibility, setVisibility] = useState(false)
  const [visibilityRecovery, setVisibilityRecovery] = useState(!user.valid_password)
  return (
    <DropdownMenu right>
      <DropdownItem
        tag="a"
        href="#"
        onClick={() => setVisibility(!visibility)}
      >
        <Icon.Lock size={14} />
        <span className="align-middle"> Editar contraseña</span>
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem
        tag="a"
        href="/"
        onClick={handleLogout}
      >
        <Icon.Power size={14} />
        <span className="align-middle"> Cerrar Sesión</span>
      </DropdownItem>
      <UpdateUserPassword
        visibility={visibility}
        setVisibility={setVisibility}
        userData={user}
        onClose={() => setVisibility(false)}
      />
      <RecoveryUserPassword
        visibility={visibilityRecovery}
        setVisibility={setVisibilityRecovery}
        userData={user}
        updateValidPassword={updateValidPassword}
        onClose={() => setVisibilityRecovery(false)}
      />
    </DropdownMenu>
  )
}

const NavbarUser = (props) => {
  const { user: { name, role }, userImg } = props
  return (
    <ul className="nav navbar-nav navbar-nav-user float-right">
      {
        name && (
          <Notification />
        )
      }
      <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
        <DropdownToggle tag="a" className="nav-link dropdown-user-link">
          <div className="user-nav d-sm-flex d-none">
            <span className="user-name text-bold-600">{name}</span>
            <span className="user-status">{profiles[role]}</span>
          </div>
          <span data-tour="user">
            <img
              src={userImg}
              className="round"
              height="40"
              width="40"
              alt="avatar"
            />
          </span>
        </DropdownToggle>
        <UserDropdown {...props} />
      </UncontrolledDropdown>
    </ul>
  )
}

export default NavbarUser
