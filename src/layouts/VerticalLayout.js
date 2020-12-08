/* eslint-disable react/no-did-update-set-state */
import React, { PureComponent } from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'
import Navbar from './components/Navbar'
import Sidebar from './components/Menu'
import Footer from './components/Footer'
import {
  changeMode,
  collapseSidebar,
} from '../redux/actions/customizer'

class VerticalLayout extends PureComponent {
  collapsedPaths = []

  mounted = false

  constructor(props) {
    super(props)
    this.state = {
      width: window.innerWidth,
      sidebarState: props.app.customizer.sidebarCollapsed,
      collapsedContent: props.app.customizer.sidebarCollapsed,
      sidebarHidden: false,
      appOverlay: false,
    }
  }

  componentDidMount() {
    this.mounted = true
    const { location: { pathname } } = this.props
    if (this.mounted) {
      if (window !== 'undefined') {
        window.addEventListener('resize', this.updateWidth, false)
      }
      if (this.collapsedPaths.includes(pathname)) {
        collapseSidebar(true)
      }

      document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr')
    }
  }

  componentDidUpdate(prevProps) {
    const {
      location: { pathname },
      app: {
        customizer: { sidebarCollapsed },
      },
    } = this.props

    if (this.mounted) {
      if (
        prevProps.app.customizer.sidebarCollapsed
        !== sidebarCollapsed
      ) {
        this.setState({
          collapsedContent: sidebarCollapsed,
          sidebarState: sidebarCollapsed,
        })
      }
      if (
        prevProps.app.customizer.sidebarCollapsed
          === sidebarCollapsed
        && pathname !== prevProps.location.pathname
        && this.collapsedPaths.includes(pathname)
      ) {
        collapseSidebar(true)
      }
      if (
        prevProps.app.customizer.sidebarCollapsed
          === sidebarCollapsed
        && pathname !== prevProps.location.pathname
        && !this.collapsedPaths.includes(pathname)
      ) {
        collapseSidebar(false)
      }
    }
  }

  componentWillUnmount() {
    this.mounted = false
  }

  updateWidth = () => {
    if (this.mounted) this.setState(() => ({ width: window.innerWidth }))
  };

  toggleSidebarMenu = () => {
    const { collapsedContent, sidebarState } = this.state
    this.setState({
      sidebarState: !sidebarState,
      collapsedContent: !collapsedContent,
    })
  }

  handleSidebarVisibility = () => {
    const { sidebarHidden } = this.state
    if (this.mounted) {
      if (window !== undefined) {
        window.addEventListener('resize', () => {
          if (sidebarHidden) {
            this.setState({ sidebarHidden: !sidebarHidden })
          }
        })
      }
      this.setState({
        sidebarHidden: !sidebarHidden,
      })
    }
  };

  sidebarMenuHover = (val) => {
    this.setState({ sidebarState: val })
  }

  handleAppOverlay = (value) => {
    if (value.length > 0) {
      this.setState({ appOverlay: true })
    } else if (value.length < 0 || value === '') {
      this.setState({ appOverlay: false })
    }
  };

  handleAppOverlayClick = () => {
    this.setState({ appOverlay: false })
  };

  render() {
    const { app, children, match } = this.props
    const {
      appOverlay, collapsedContent, sidebarState, sidebarHidden, width,
    } = this.state
    const appProps = app.customizer
    const sidebarProps = {
      toggleSidebarMenu: collapseSidebar,
      toggle: this.toggleSidebarMenu,
      sidebarState,
      sidebarHover: this.sidebarMenuHover,
      sidebarVisibility: this.handleSidebarVisibility,
      visibilityState: sidebarHidden,
      activePath: match.path,
      collapsedMenuPaths: this.handleCollapsedMenuPaths,
      activeTheme: appProps.menuTheme,
      collapsed: collapsedContent,
      deviceWidth: width,
    }

    const navbarProps = {
      toggleSidebarMenu: this.toggleSidebarMenu,
      sidebarState,
      sidebarVisibility: this.handleSidebarVisibility,
      appOverlayState: appOverlay,
    }

    return (
      <div className={classnames(
        'wrapper vertical-layout theme-primary navbar-floating',
        {
          'menu-collapsed': collapsedContent === true && width >= 1200,
        },
      )}
      >
        <Sidebar {...sidebarProps} />
        <div
          className={classnames(
            'app-content content', { 'show-overlay': appOverlay === true },
          )}
          onClick={this.handleAppOverlayClick}
        >
          <Navbar {...navbarProps} />
          <div className="content-wrapper">{children}</div>
        </div>
        <Footer />
        <div
          className="sidenav-overlay"
          onClick={this.handleSidebarVisibility}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  app: state.customizer,
})

export default connect(mapStateToProps, {
  changeMode,
  collapseSidebar,
})(VerticalLayout)
