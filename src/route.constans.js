import React from 'react';

export const Dashboard = React.lazy(() => import('./containers/Dashboard/Dashboard'));

export const PUBLIC_ROUTES = [
    {
        path: '/',
        exact: true,
        component: React.lazy(() => import('@sirius/pages/Auth/SignIn')),
    },
    {
        path: '/forgotpassword',
        component: React.lazy(() => import('@sirius/pages/Auth/ForgetPassword'),)
    }
];

export const SUPER_ADMIN_ROUTES = [
    {
        path: '',
        component: React.lazy(() => import('@sirius/pages/SuperAdmin/Home')),
        exact: true
    },
    {
        path: '/enterprise',
        component: React.lazy(() => import('@sirius/pages/SuperAdmin/Enterprise')),
        exact: true
    },
    {
        path: '/enterprise/create',
        component: React.lazy(() => import('@sirius/pages/SuperAdmin/Enterprise/Add')),
    }
];

export const ADMIN_ROUTES = [
    {
        path: '',
        component: React.lazy(() => import('@sirius/pages/Admin/Home')),
        exact: true
    },
    {
        path: '/job-positions',
        component: React.lazy(() => import('@sirius/pages/Admin/JobPositions')),
        exact: true
    },
    {
        path: '/workers',
        component: React.lazy(() => import('@sirius/pages/Admin/Workers')),
        exact: true
    },
    {
        path: '/activities',
        component: React.lazy(() => import('@sirius/pages/Admin/Activities')),
        exact: true
    },
    {
        path: '/trainings',
        component: React.lazy(() => import('@sirius/pages/Admin/Trainings')),
        exact: true
    },
    {
        path: '/programs',
        component: React.lazy(() => import('@sirius/pages/Admin/Programs')),
        exact: true
    },
    {
        path: '/plans',
        component: React.lazy(() => import('@sirius/pages/Admin/Plans')),
        exact: true
    },
];