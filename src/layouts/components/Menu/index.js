import React, { Component } from 'react'
import classnames from 'classnames'
import Hammer from 'react-hammerjs'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { ContextAuth } from '../../../utility/context/Auth'
import SidebarHeader from './_SidebarHeader'
import SideMenuContent from './sidemenu/_SideMenuContent'

class Sidebar extends Component {
  static getDerivedStateFromProps(props, state) {
    if (props.activePath !== state.activeItem) {
      return {
        activeItem: props.activePath,
      }
    }

    return null
  }

    mounted = false

    constructor(props) {
      super(props)
      const { activePath } = props
      this.state = {
        width: window.innerWidth,
        activeIndex: null,
        activeItem: activePath,
        menuShadow: false,
        ScrollbarTag: PerfectScrollbar,
      }
    }

    componentDidMount() {
      this.mounted = true
      if (this.mounted) {
        if (window !== 'undefined') {
          window.addEventListener('resize', this.updateWidth, false)
        }
        this.checkDevice()
      }
    }

    updateWidth = () => {
      if (this.mounted) {
        this.setState(() => ({ width: window.innerWidth }))
        this.checkDevice()
      }
    }

    checkDevice = () => {
      const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ')
      const mq = function mq(query) {
        return window.matchMedia(query).matches
      }

      if ('ontouchstart' in window || window.DocumentTouch) {
        this.setState({ ScrollbarTag: 'div' })
      } else {
        this.setState({ ScrollbarTag: PerfectScrollbar })
      }
      const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('')
      return mq(query)
    }

    changeActiveIndex = (id) => {
      const { activeIndex } = this.state
      if (id !== activeIndex) {
        this.setState({ activeIndex: id })
      } else {
        this.setState({ activeIndex: null })
      }
    }

    handleActiveItem = (url) => this.setState({ activeItem: url })

    render() {
      const {
        visibilityState,
        toggleSidebarMenu,
        toggle,
        color,
        sidebarVisibility,
        activeTheme,
        collapsed,
        activePath,
        sidebarState,
        collapsedMenuPaths,
      } = this.props

      const {
        activeIndex,
        activeItem,
        hoveredMenuItem,
        menuShadow,
        ScrollbarTag,
      } = this.state
      const scrollShadow = (container, dir) => {
        if (container && dir === 'up' && container.scrollTop >= 100) {
          this.setState({ menuShadow: true })
        } else if (container && dir === 'down' && container.scrollTop < 100) {
          this.setState({ menuShadow: false })
        }
      }

      const { width } = this.state
      const { deviceWidth } = this.props
      return (
        <>
          <Hammer
            onSwipe={() => {
              sidebarVisibility()
            }}
            direction="DIRECTION_RIGHT"
          >
            <div className="menu-swipe-area d-xl-none d-block vh-100" />
          </Hammer>
          <div
            className={classnames(
              'main-menu menu-fixed menu-light menu-accordion menu-shadow theme-primary',
              {
                collapsed: sidebarState === true,
                'hide-sidebar': width < 1200 && visibilityState === false,
              },
            )}
          >
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
              className={classnames('main-menu-content', {
                'overflow-hidden': ScrollbarTag !== 'div',
                'overflow-scroll': ScrollbarTag === 'div',
              })}
              {...(ScrollbarTag !== 'div' && {
                options: { wheelPropagation: false },
                onScrollDown: (container) => scrollShadow(container, 'down'),
                onScrollUp: (container) => scrollShadow(container, 'up'),
                onYReachStart: () => menuShadow === true
                            && this.setState({ menuShadow: false }),
              })}
            >
              <Hammer
                onSwipe={() => {
                  sidebarVisibility()
                }}
                direction="DIRECTION_RIGHT"
              >
                <ul className="navigation navigation-main">
                  <ContextAuth.Consumer>
                    {
                              (({ user }) => (
                                <SideMenuContent
                                  setActiveIndex={this.changeActiveIndex}
                                  activeIndex={activeIndex}
                                  hoverIndex={hoveredMenuItem}
                                  handleSidebarMouseEnter={this.handleSidebarMouseEnter}
                                  activeItemState={activeItem}
                                  handleActiveItem={this.handleActiveItem}
                                  activePath={activePath}
                                  user={user}
                                  collapsedMenuPaths={collapsedMenuPaths}
                                  toggleMenu={sidebarVisibility}
                                  deviceWidth={deviceWidth}
                                />
                              ))
                            }
                  </ContextAuth.Consumer>
                </ul>
              </Hammer>
            </ScrollbarTag>
          </div>
        </>
      )
    }
}

export default Sidebar
