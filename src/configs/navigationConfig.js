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
        navLink: "/dashboard/enterprises",
        parentOf: [
            "/dashboard/enterprises/add"
        ]
    },
    {
        id: "areas",
        title: "Areas de trabajo",
        type: "item",
        icon: <Icon.Box size={20} />,
        permissions: ["administrador"],
        navLink: "/dashboard/areas"
    },
    {
        id: "jobs",
        title: "Puestos de trabajo",
        type: "item",
        icon: <Icon.Briefcase size={20} />,
        permissions: ["administrador", "jefe area"],
        navLink: "/dashboard/jobs"
    },
    {
        id: "employees",
        title: "Trabajadores",
        type: "item",
        icon: <Icon.Users size={20} />,
        permissions: ["administrador", "jefe area"],
        navLink: "/dashboard/employees"
    },
    {
        id: "activities",
        title: "Actividades",
        type: "item",
        icon: <Icon.Activity size={20} />,
        permissions: ["administrador", "jefe area"],
        navLink: "/dashboard/activities"
    },
    {
        id: "trainings",
        title: "Capacitaciones",
        type: "item",
        icon: <Icon.Clipboard size={20} />,
        permissions: ["administrador", "jefe area"],
        navLink: "/dashboard/trainings"
    },
    {
        id: "programs",
        title: "Programas de vigilancia",
        type: "item",
        icon: <Icon.Video size={20} />,
        permissions: ["administrador", "jefe area"],
        navLink: "/dashboard/programs"
    },
    {
        id: "actions",
        title: "Planes de acción",
        type: "item",
        icon: <Icon.BookOpen size={20} />,
        permissions: ["administrador", "jefe area"],
        navLink: "/dashboard/actions"
    },
]

export default navigationConfig