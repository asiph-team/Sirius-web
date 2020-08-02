import React, { PureComponent } from 'react'
import classnames from "classnames";
import Navbar from './components/Navbar'
import Sidebar from './components/Menu';
import Footer from './components/Footer'
import { connect } from "react-redux";
import {
  changeMode,
  collapseSidebar
} from "../redux/actions/customizer";

class VerticalLayout extends PureComponent {
  state = {
    width: window.innerWidth,
    sidebarState: this.props.app.customizer.sidebarCollapsed,
    layout: this.props.app.customizer.theme,
    collapsedContent: this.props.app.customizer.sidebarCollapsed,
    sidebarHidden: false,
    appOverlay: false,
    customizer: false,
    currRoute: this.props.location.pathname
  }

  collapsedPaths = []
  mounted = false

  updateWidth = () => {
    if (this.mounted) this.setState(prevState => ({ width: window.innerWidth }))
  };

  componentDidMount() {
    this.mounted = true;
    let { location: { pathname } } = this.props;
    if (this.mounted) {
      if (window !== "undefined") {
        window.addEventListener("resize", this.updateWidth, false);
      }
      if (this.collapsedPaths.includes(pathname)) {
        this.props.collapseSidebar(true)
      }

      document.getElementsByTagName("html")[0].setAttribute("dir", "ltr")
    }
  }

  componentDidUpdate(prevProps) {
    let {
      location: { pathname },
      app: {
        customizer: { sidebarCollapsed }
      }
    } = this.props

    if (this.mounted) {
      if (
        prevProps.app.customizer.sidebarCollapsed !==
        this.props.app.customizer.sidebarCollapsed
      ) {
        this.setState({
          collapsedContent: sidebarCollapsed,
          sidebarState: sidebarCollapsed
        })
      }
      if (
        prevProps.app.customizer.sidebarCollapsed ===
          this.props.app.customizer.sidebarCollapsed &&
        pathname !== prevProps.location.pathname &&
        this.collapsedPaths.includes(pathname)
      ) {
        this.props.collapseSidebar(true);
      }
      if (
        prevProps.app.customizer.sidebarCollapsed ===
          this.props.app.customizer.sidebarCollapsed &&
        pathname !== prevProps.location.pathname &&
        !this.collapsedPaths.includes(pathname)
      ) {
        this.props.collapseSidebar(false);
      }
    }
  }

  toggleSidebarMenu = val => {
    console.log('toggleSidebarMenu()')
    this.setState({
      sidebarState: !this.state.sidebarState,
      collapsedContent: !this.state.collapsedContent
    })
  }

  sidebarMenuHover = val => {
    console.log('sidebarMenuHover()')
    this.setState({ sidebarState: val })
  }

  handleSidebarVisibility = () => {
    console.log('handleSidebarVisibility()');
    if (this.mounted) {
      if (window !== undefined) {
        window.addEventListener("resize", () => {
          if (this.state.sidebarHidden) {
            this.setState({ sidebarHidden: !this.state.sidebarHidden });
          }
        });
      }
      this.setState({
        sidebarHidden: !this.state.sidebarHidden
      });
    }
  };

  componentWillUnmount() {
    this.mounted = false;
  }

  handleAppOverlay = value => {
    console.log('handleAppOverlay()')
    if (value.length > 0) {
      this.setState({ appOverlay: true });
    } else if (value.length < 0 || value === "") {
      this.setState({ appOverlay: false });
    }
  };

  handleAppOverlayClick = () => {
    console.log('handleAppOverlayClick()')
    this.setState({ appOverlay: false });
  };

  render(){
    let appProps = this.props.app.customizer
    let sidebarProps = {
      toggleSidebarMenu: this.props.collapseSidebar,
      toggle: this.toggleSidebarMenu,
      sidebarState: this.state.sidebarState,
      sidebarHover: this.sidebarMenuHover,
      sidebarVisibility: this.handleSidebarVisibility,
      visibilityState: this.state.sidebarHidden,
      activePath: this.props.match.path,
      collapsedMenuPaths: this.handleCollapsedMenuPaths,
      activeTheme: appProps.menuTheme,
      collapsed: this.state.collapsedContent,
      deviceWidth: this.state.width
    };

    let navbarProps = {
      toggleSidebarMenu: this.toggleSidebarMenu,
      sidebarState: this.state.sidebarState,
      sidebarVisibility: this.handleSidebarVisibility,
      appOverlayState: this.state.appOverlay,
    }

    return(
      <div className={classnames(
        "wrapper vertical-layout theme-primary navbar-floating",
        {
          "menu-collapsed": this.state.collapsedContent === true && this.state.width >= 1200,
        })
        }>
        <Sidebar {...sidebarProps}/>
        <div className={classnames("app-content content", { "show-overlay": this.state.appOverlay === true })} onClick={this.handleAppOverlayClick}>
          <Navbar {...navbarProps} />
          <div className="content-wrapper">{this.props.children}</div>
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

const mapStateToProps = state => {
  return {
    app: state.customizer
  };
};

export default connect(mapStateToProps, {
  changeMode,
  collapseSidebar
})(VerticalLayout);