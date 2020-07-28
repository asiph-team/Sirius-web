import React, {Component} from 'react'
import {
    NavItem,
    NavLink
  } from 'reactstrap'
import * as Icon from 'react-feather'

class NavbarBookmarks extends Component {
    render() {
        let { sidebarVisibility } = this.props
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
                    <h3 className="d-none d-lg-block mb-0 ml-1 primary">Nombre empresa</h3>
                </ul>
            </div>
        )
    }
}

export default NavbarBookmarks