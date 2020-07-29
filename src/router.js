import React, { lazy, Suspense } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { history } from './history'
import { LoadingSpinner } from './components/@vuexy/Spinner'
import { ContextLayout } from './utility/context/Layout'

const Login = lazy(() => import('./views/pages/auth/Login'))

const RouteConfig = ({ component: Component, fullLayout, ...rest }) => (
    <Route
      {...rest}
      render={props => (
            <ContextLayout.Consumer>
                {value => {
                let LayoutTag = fullLayout === true ? value.fullLayout : value.VerticalLayout
                return (
                    <LayoutTag {...props}>
                        <Suspense fallback={<LoadingSpinner />}>
                            <Component {...props} />
                        </Suspense>
                    </LayoutTag>
                    )
                }}
            </ContextLayout.Consumer>
        )}
    />
  )

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <RouteConfig exact path="/" component={Login} fullLayout/>
            <RouteConfig exact path="/dashboard" component={() => <h1>HOLA SOY EL DASHBOARD</h1>} />
        </Switch>
    </Router>
)

export default AppRouter