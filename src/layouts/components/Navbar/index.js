import React from 'react'
import { Navbar } from 'reactstrap'
import NavbarUser from './_NavbarUser'
import NavbarBookmarks from './_NavbarBookmarks'
import userImg from "../../../assets/img/portrait/small/avatar-s-11.jpg"
import { ContextAuth } from '../../../utility/context/Auth'

const ThemeNavbar = props => {
    return (
            <ContextAuth.Consumer>
            {({ user }) => (
                <>
                    <div className="content-overlay" />
                    <div className="header-navbar-shadow" />
                    <Navbar className="header-navbar navbar-expand-lg navbar navbar-with-menu navbar-shadow navbar-light floating-nav" id="navbar-sirius">
                        <div className="navbar-wrapper">
                            <div className="navbar-container content">
                                <div
                                    className="navbar-collapse d-flex justify-content-between align-items-center"
                                    id="navbar-mobile"
                                >
                                    <div className="bookmark-wrapper">
                                        <NavbarBookmarks
                                            sidebarVisibility={props.sidebarVisibility}
                                            handleAppOverlay={props.handleAppOverlay}
                                        />
                                    </div>
                                    <NavbarUser user={user} userImg={userImg}/>
                                </div>
                            </div>
                        </div>
                    </Navbar>
                </>
            )}
            </ContextAuth.Consumer>
    )
}

export default ThemeNavbar