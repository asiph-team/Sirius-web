import React, { Suspense } from 'react';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Dashboard, PUBLIC_ROUTES, SUPER_ADMIN_ROUTES, ADMIN_ROUTES } from './route.constans';
import {superAdminOptions, adminOptions} from './options';
import ErrorBoundary from './ErrorBoundary';
import Loader from './components/utility/loader';

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
                        {PUBLIC_ROUTES.map((route, index) => (
                            <Route key={index} path={route.path} exact={route.exact}>
                                <route.component />
                            </Route>
                        ))}
                        <PrivateRoute path="/superadmin">
                            <Dashboard routes={SUPER_ADMIN_ROUTES} options={superAdminOptions}/>
                        </PrivateRoute>
                        <PrivateRoute path="/admin">
                            <Dashboard routes={ADMIN_ROUTES} options={adminOptions}/>
                        </PrivateRoute>
                    </Switch>
                </Router>
            </Suspense>
        </ErrorBoundary>
    )
}