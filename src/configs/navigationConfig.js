import React from 'react'
import * as Icon from 'react-feather'

const navigationConfig = [
    {
        id: "home",
        title: "Inicio",
        type: "item",
        icon: <Icon.Home size={20} />,
        navLink: "/dashboard"
    },
    {
        id: "enterprises",
        title: "Empresas",
        type: "item",
        icon: <Icon.Shield size={20} />,
        permissions: ["superadministrador"],
        navLink: "/dashboard/enterprises"
    },
]

export default navigationConfig