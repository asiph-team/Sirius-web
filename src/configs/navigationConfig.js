import React from 'react'
import * as Icon from 'react-feather'

const navigationConfig = [
  {
    id: 'home',
    title: 'Inicio',
    type: 'item',
    icon: <Icon.Home size={20} />,
    navLink: '/dashboard',
  },
  {
    id: 'enterprises',
    title: 'Empresas',
    type: 'item',
    icon: <Icon.Shield size={20} />,
    permissions: ['superadministrador'],
    navLink: '/dashboard/enterprises',
    parentOf: [
      '/dashboard/enterprises/add',
      '/dashboard/enterprises/edit',
    ],
  },
  {
    id: 'areas',
    title: 'Areas de trabajo',
    type: 'item',
    icon: <Icon.Box size={20} />,
    permissions: ['administrador'],
    navLink: '/dashboard/areas',
    parentOf: [
      '/dashboard/areas/add',
      '/dashboard/areas/edit',
    ],
  },
  {
    id: 'jobs',
    title: 'Puestos de trabajo',
    type: 'item',
    icon: <Icon.Briefcase size={20} />,
    permissions: ['administrador', 'jefe area'],
    navLink: '/dashboard/workstations',
    parentOf: [
      '/dashboard/workstations/add',
      '/dashboard/workstations/edit',
    ],
  },
  {
    id: 'employees',
    title: 'Trabajadores',
    type: 'item',
    icon: <Icon.Users size={20} />,
    permissions: ['administrador', 'jefe area'],
    navLink: '/dashboard/employees',
    parentOf: [
      '/dashboard/employees/add',
      '/dashboard/employees/edit',
    ],
  },
  {
    id: 'activities',
    title: 'Actividades',
    type: 'item',
    icon: <Icon.Activity size={20} />,
    permissions: ['administrador', 'jefe area'],
    navLink: '/dashboard/activities',
    parentOf: [
      '/dashboard/activities/add',
      '/dashboard/activities/edit',
    ],
  },
  {
    id: 'trainigs',
    title: 'Capacitaciones',
    type: 'item',
    icon: <Icon.Clipboard size={20} />,
    permissions: ['administrador', 'jefe area'],
    navLink: '/dashboard/trainings',
    parentOf: [
      '/dashboard/trainings/add',
      '/dashboard/trainings/edit',
    ],
  },
  {
    id: 'programs',
    title: 'Programas de vigilancia',
    type: 'item',
    icon: <Icon.Video size={20} />,
    permissions: ['administrador', 'jefe area'],
    navLink: '/dashboard/programs',
    parentOf: [
      '/dashboard/programs/add',
      '/dashboard/programs/edit',
    ],
  },
  {
    id: 'actions',
    title: 'Planes de acción',
    type: 'item',
    icon: <Icon.BookOpen size={20} />,
    permissions: ['administrador', 'jefe area'],
    navLink: '/dashboard/actions',
    parentOf: [
      '/dashboard/actions/add',
      '/dashboard/actions/edit',
    ],
  },
]

export default navigationConfig
