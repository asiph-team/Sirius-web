import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import classnames from 'classnames'
import { X } from 'react-feather'
import logo from '../../../assets/img/logo/logo.png'

class SidebarHeader extends PureComponent {
  render() {
    const {
      menuShadow,
      sidebarVisibility,
    } = this.props
    return (
      <div className="navbar-header">
        <ul className="nav navbar-nav flex-row">
          <li className="nav-item mr-auto">
            <NavLink to="/" className="navbar-brand">
              <img className="brand-logo" src={logo} alt="Sinjury" />
              <h2 className="brand-text mb-0">Sinjury</h2>
            </NavLink>
          </li>
          <li className="nav-item nav-toggle">
            <div className="nav-link modern-nav-toggle">
              <X
                onClick={sidebarVisibility}
                className="toggle-icon icon-x d-block d-xl-none font-medium-4 text-primary"
                size={20}
              />
            </div>
          </li>
        </ul>
        <div
          className={classnames('shadow-bottom', {
            'd-none': menuShadow === false,
          })}
        />
      </div>
    )
  }
}

export default SidebarHeader
