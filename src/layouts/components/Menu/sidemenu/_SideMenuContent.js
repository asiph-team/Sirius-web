import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import navigationConfig from '../../../../configs/navigationConfig'
import { history } from '../../../../history'

class SideMenuContent extends React.Component {
  constructor(props) {
    super(props)
    this.parentArr = []
    this.collapsedPath = null
    this.redirectUnauthorized = () => history.push('/')
    this.state = {
      activeGroups: [],
    }
  }

  renderItem = (item) => {
    const { activeGroups } = this.state
    const {
      activeItemState, deviceWidth, handleActiveItem, hoverIndex, toggleMenu,
    } = this.props
    return (
      <li
        className={classnames('nav-item', {
          open: activeGroups.includes(item.id),
          hover: hoverIndex === item.id,
          active: (activeItemState === item.navLink)
          || (item.parentOf && item.parentOf.includes(activeItemState)),
        })}
        key={item.id}
        onClick={(e) => {
          e.stopPropagation()
          handleActiveItem(item.navLink)
          if (deviceWidth <= 1200 && item.type === 'item') toggleMenu()
        }}
      >
        <Link
          to={item.navLink}
          className="d-flex justify-content-start"
          key={item.id}
        >
          <div className="menu-text">
            {item.icon}
            <span className="menu-item menu-title">
              {item.title}
            </span>
          </div>
        </Link>
      </li>
    )
  }

  render() {
    const { user } = this.props
    const menuItems = navigationConfig.map((item) => {
      if ((item.permissions && item.permissions.includes(user.role.toLowerCase()))
      || item.permissions === undefined) {
        return this.renderItem(item)
      }

      return null
    })

    return <>{menuItems}</>
  }
}
export default SideMenuContent
