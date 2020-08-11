import React, { PureComponent } from 'react'
import {
  NavItem,
  NavLink,
} from 'reactstrap'
import * as Icon from 'react-feather'

class NavbarBookmarks extends PureComponent {
  render() {
    const { sidebarVisibility, enterprise } = this.props
    return (
      <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
        <ul className="navbar-nav d-xl-none">
          <NavItem className="mobile-menu mr-auto">
            <NavLink
              className="nav-menu-main menu-toggle hidden-xs is-active"
              onClick={sidebarVisibility}
            >
              <Icon.Menu className="ficon" />
            </NavLink>
          </NavItem>
        </ul>
        <ul className="nav navbar-nav">
          {enterprise && <h3 className="d-none d-lg-block mb-0 ml-1 primary">{enterprise}</h3>}
        </ul>
      </div>
    )
  }
}

export default NavbarBookmarks
