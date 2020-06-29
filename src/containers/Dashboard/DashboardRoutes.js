import React, {lazy, Suspense} from 'react';
import {Route, useRouteMatch, Switch} from 'react-router-dom';
import Loader from '@sirius/components/utility/loader';

const routes = [
    {
        path: '',
        component: lazy(() => import('@sirius/pages/Home/Home')),
        exact: true
    },
    {
        path: 'enterprise',
        component: lazy(() => import('@sirius/pages/Enterprise/Enterprise')),
        exact: true
    },
];

export default function AppRouter() {
    const { url } = useRouteMatch();
    return(
        <Suspense fallback={<Loader />}>
            <Switch>
                {
                    routes.map((route, index) => (
                        <Route exact={route.exact} key={index} path={`${url}${route.path}`}>
                            <route.component />
                        </Route>
                    ))
                }
            </Switch>
        </Suspense>
    )
}