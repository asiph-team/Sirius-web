import React, {Suspense} from 'react';
import {Route, useRouteMatch, Switch} from 'react-router-dom';
import Loader from '@sirius/components/utility/loader';

export default function AppRouter(props) {
    const { url } = useRouteMatch();
    const { routes } = props;

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