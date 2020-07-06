import React, { lazy, Suspense } from 'react';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PUBLIC_ROUTE } from './route.constans';
import ErrorBoundary from './ErrorBoundary';
import Loader from './components/utility/loader';

const Dashboard = lazy(() => import('./containers/Dashboard/Dashboard'));

const publicRoutes = [
    {
        path: PUBLIC_ROUTE.LANDING,
        exact: true,
        component: lazy(() => import('@sirius/pages/Auth/SignIn')),
    },
    {
        path: PUBLIC_ROUTE.FORGET_PASSWORD,
        component: lazy(() => import('@sirius/pages/Auth/ForgetPassword'),)
    }
];

function PrivateRoute({ children, ...rest}) {
    const isLoggedIn = useSelector(state => state.Auth.idToken);

    return (
        <Route
            {...rest}
            render={({location}) =>
            isLoggedIn ? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: '/',
                        state: {from: location}
                    }}
                />
            )}
        />
    )
}

export default function Routes() {
    return (
        <ErrorBoundary>
            <Suspense fallback={<Loader />}>
                <Router>
                    <Switch>
                        {publicRoutes.map((route, index) => (
                            <Route key={index} path={route.path} exact={route.exact}>
                                <route.component />
                            </Route>
                        ))}
                        <PrivateRoute path="/dashboard">
                            <Dashboard />
                        </PrivateRoute>
                    </Switch>
                </Router>
            </Suspense>
        </ErrorBoundary>
    )
}