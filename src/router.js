import React, { lazy, Suspense } from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
// import { PUBLIC_ROUTE } from './route.constans';
import ErrorBoundary from './ErrorBoundary';
import Loader from './components/utility/loader';

const Dashboard = lazy(() => import('./containers/Dashboard/Dashboard'));

export default function Routes() {
    return (
        <ErrorBoundary>
            <Suspense fallback={<Loader />}>
                <Router>
                    <Switch>
                        <Route path="/">
                            <Dashboard />
                        </Route>
                    </Switch>
                </Router>
            </Suspense>
        </ErrorBoundary>
    )
}