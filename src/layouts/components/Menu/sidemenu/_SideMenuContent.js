import React from "react"
import { Link } from "react-router-dom"
import classnames from "classnames"
import navigationConfig from '../../../../configs/navigationConfig'
import { history } from '../../../../history'

class SideMenuContent extends React.Component {
  constructor(props) {
    super(props)
    this.parentArr = []
    this.collapsedPath = null
    this.redirectUnauthorized = () => history.push("/")
  }

  state = {
    flag: true,
    isHovered: false,
    activeGroups: [],
    currentActiveGroup: [],
    tempArr: []
  }

  renderItem = item => (
    <li
      className={classnames("nav-item", {
        open: this.state.activeGroups.includes(item.id),
        hover: this.props.hoverIndex === item.id,
        active: this.props.activeItemState === item.navLink,
      })}
      key={item.id}
      onClick={e => {
        e.stopPropagation()
        this.props.handleActiveItem(item.navLink)
        if (this.props.deviceWidth <= 1200 && item.type === "item") this.props.toggleMenu()
      }}>
        <Link
          to={item.navLink}
          className="d-flex justify-content-start"
          key={item.id}>
              <div className="menu-text">
              {item.icon}
              <span className="menu-item menu-title">
                {item.title}
              </span>
            </div>
          </Link>
      </li>
  )

  render() {
    const { user } = this.props
    const menuItems = navigationConfig.map(item => {
      if ((item.permissions && item.permissions.includes(user.role.toLowerCase())) || item.permissions === undefined) {
        return this.renderItem(item)
      }

      return null;
    })

    return <>{menuItems}</>
  }
}
export default SideMenuContent