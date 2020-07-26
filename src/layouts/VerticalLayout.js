import React, { PureComponent } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Menu/vertical-menu/Sidebar';
import Footer from './components/Footer'

class VerticalLayout extends PureComponent {
    state = {
        width: window.innerWidth,
        sidebarHidden: false,
        appOverlay: false,
        customizer: false,
        currRoute: this.props.location.pathname
    };

    render(){
        let sidebarProps = {
            toggleSidebarMenu: this.props.collapseSidebar,
            toggle: this.toggleSidebarMenu,
            sidebarState: this.state.sidebarState,
            sidebarHover: this.sidebarMenuHover,
            sidebarVisibility: this.handleSidebarVisibility,
            visibilityState: this.state.sidebarHidden,
            activePath: this.props.match.path,
            collapsedMenuPaths: this.handleCollapsedMenuPaths,
            currentLang: this.state.currentLang,
            collapsed: this.state.collapsedContent,
            permission: this.props.permission,
            deviceWidth: this.state.width
          };
        return(
            <div className="wrapper vertical-layout">
                <Sidebar {...sidebarProps}/>
                <Navbar />
                <div className="content-wrapper">{this.props.children}</div>
                <Footer />
            </div>
        )
    }
}

export default VerticalLayout