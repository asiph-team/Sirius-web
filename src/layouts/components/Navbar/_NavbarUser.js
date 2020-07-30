import React from 'react'
import { DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown } from 'reactstrap'
import * as Icon from 'react-feather'

const UserDropdown = props => {
    return(
        <DropdownMenu right>
            <DropdownItem
                tag="a"
                href="#"
                onClick={() => console.log('EDITAR PERFIL')}
            >
                <Icon.User size={14} className="mr-50" />
                <span className="align-middle">Editar Perfil</span>
            </DropdownItem>
            <DropdownItem
                tag="a"
                href="#"
                onClick={() => console.log('CAMBIAR CONTRASEÑA')}
            >
                <Icon.User size={14} className="mr-50" />
                <span className="align-middle">Cambiar Contraseña</span>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem
                tag="a"
                href="/"
                onClick={() => console.log('CERRAR SESIÓN')}
            >
                <Icon.Power size={14} className="mr-50" />
                <span className="align-middle">Cerrar Sesión</span>
            </DropdownItem>
        </DropdownMenu>
    )
}

class NavbarUser extends React.PureComponent {
    render(){
        const { name, role } = this.props.user
        return (
            <ul className="nav navbar-nav navbar-nav-user float-right">
                <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
                    <DropdownToggle tag="a" className="nav-link dropdown-user-link">
                        <div className="user-nav d-sm-flex d-none">
                        <span className="user-name text-bold-600">{name}</span>
                        <span className="user-status">{role}</span>
                        </div>
                        <span data-tour="user">
                        <img
                            src={this.props.userImg}
                            className="round"
                            height="40"
                            width="40"
                            alt="avatar"
                        />
                        </span>
                    </DropdownToggle>
                    <UserDropdown {...this.props} />
                </UncontrolledDropdown>
            </ul>
        )
    }
}

export default NavbarUser