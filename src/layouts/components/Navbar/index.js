import React from 'react'
import { Navbar } from 'reactstrap'
import NavbarUser from './_NavbarUser'
import NavbarBookmarks from './_NavbarBookmarks'
import userImg from '../../../assets/img/user.png'
import { ContextAuth } from '../../../utility/context/Auth'

const ThemeNavbar = (props) => (
  <ContextAuth.Consumer>
    {({ user, logout, updateValidPassword, alert }) => (
      <>
        <div className="content-overlay" />
        <div className="header-navbar-shadow" />
        <Navbar className="header-navbar navbar-expand-lg navbar navbar-with-menu navbar-shadow navbar-light floating-nav" id="navbar-sinjury">
          <div className="navbar-wrapper">
            <div className="navbar-container content">
              <div
                className="navbar-collapse d-flex justify-content-between align-items-center"
                id="navbar-mobile"
              >
                <div className="bookmark-wrapper">
                  <NavbarBookmarks
                    enterprise={user.enterprise}
                    sidebarVisibility={props.sidebarVisibility}
                    handleAppOverlay={props.handleAppOverlay}
                  />
                </div>
                <NavbarUser user={user} userImg={userImg} alert={alert} handleLogout={logout} updateValidPassword={updateValidPassword} />
              </div>
            </div>
          </div>
        </Navbar>
      </>
    )}
  </ContextAuth.Consumer>
)

export default ThemeNavbar
