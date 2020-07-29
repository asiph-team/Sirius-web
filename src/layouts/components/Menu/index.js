import React, { Component } from 'react'
import classnames from 'classnames'
import { ContextLayout } from '../../../utility/context/Layout'
import SidebarHeader from './_SidebarHeader'
import Hammer from 'react-hammerjs'
import PerfectScrollbar from 'react-perfect-scrollbar'

class Sidebar extends Component {
    static getDerivedStateFromProps(props, state) {
      if (props.activePath !== state.activeItem) {
        return {
          activeItem: props.activePath
        }
      }

      return null
    }

    state = {
        width: window.innerWidth,
        activeIndex: null,
        activeItem: this.props.activePath,
        menuShadow: false,
        ScrollbarTag: PerfectScrollbar
    }

    mounted = false

    updateWidth = () => {
        if (this.mounted) {
          this.setState(prevState => ({width: window.innerWidth}))
          this.checkDevice()
        }
    }

    componentDidMount() {
        this.mounted = true
        if (this.mounted) {
          if (window !== "undefined") {
            window.addEventListener("resize", this.updateWidth, false)
          }
          this.checkDevice()
        }
    }

    checkDevice = () => {
        var prefixes = " -webkit- -moz- -o- -ms- ".split(" ")
        var mq = function(query) {
          return window.matchMedia(query).matches
        }

        if ("ontouchstart" in window || window.DocumentTouch) {
          this.setState({ ScrollbarTag: "div" })
        } else {
          this.setState({ ScrollbarTag: PerfectScrollbar })
        }
        var query = ["(", prefixes.join("touch-enabled),("), "heartz", ")"].join("")
        return mq(query)
    }

    changeActiveIndex = id => {
        if (id !== this.state.activeIndex) {
          this.setState({ activeIndex: id })
        } else {
          this.setState({ activeIndex: null })
        }
    }

    handleActiveItem = url => this.setState({ activeItem: url })

    render() {
        let {
            visibilityState,
            toggleSidebarMenu,
            toggle,
            color,
            sidebarVisibility,
            activeTheme,
            collapsed,
            activePath,
            sidebarState,
        } = this.props

        let {
            menuShadow,
            ScrollbarTag
          } = this.state
          let scrollShadow = (container, dir) => {
            if (container && dir === "up" && container.scrollTop >= 100) {
              this.setState({ menuShadow: true })
            } else if (container && dir === "down" && container.scrollTop < 100) {
              this.setState({ menuShadow: false })
            } else {
              return
            }
        }

        return (
            <ContextLayout.Consumer>
              {context => {
                return (
                  <React.Fragment>
                    <Hammer
                      onSwipe={e => {
                        sidebarVisibility()
                      }}
                      direction="DIRECTION_RIGHT">
                      <div className="menu-swipe-area d-xl-none d-block vh-100"></div>
                    </Hammer>
                    <div
                      className={classnames(
                        `main-menu menu-fixed menu-light menu-accordion menu-shadow theme-primary`,
                        {
                          collapsed: sidebarState === true,
                          "hide-sidebar": this.state.width < 1200 && visibilityState === false
                        }
                      )}>
                      <SidebarHeader
                        toggleSidebarMenu={toggleSidebarMenu}
                        toggle={toggle}
                        sidebarBgColor={color}
                        sidebarVisibility={sidebarVisibility}
                        activeTheme={activeTheme}
                        collapsed={collapsed}
                        menuShadow={menuShadow}
                        activePath={activePath}
                        sidebarState={sidebarState}
                      />
                      <ScrollbarTag
                        className={classnames("main-menu-content", {
                          "overflow-hidden": ScrollbarTag !== "div",
                          "overflow-scroll": ScrollbarTag === "div"
                        })}
                        {...(ScrollbarTag !== "div" && {
                          options: { wheelPropagation: false },
                          onScrollDown: container => scrollShadow(container, "down"),
                          onScrollUp: container => scrollShadow(container, "up"),
                          onYReachStart: () =>
                            menuShadow === true &&
                            this.setState({ menuShadow: false })
                        })}>
                        <Hammer
                          onSwipe={() => {
                            sidebarVisibility()
                          }}
                          direction="DIRECTION_RIGHT">
                          <ul className="navigation navigation-main">
                          </ul>
                        </Hammer>
                      </ScrollbarTag>
                    </div>
                  </React.Fragment>
                )
              }}
            </ContextLayout.Consumer>
          )
    }
}

export default Sidebar