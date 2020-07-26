import React, { Suspense, lazy } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { history } from './history'
import { LoadingSpinner } from './components/@vuexy/Spinner'
import { ContextLayout } from './utility/context/Layout'

// const dashboard = lazy(() => import ('./views/Dashboard'));

const RouteConfig = ({ component: Component, fullLayout, ...rest }) => (
    <Route
      {...rest}
      render={props => (
            <ContextLayout.Consumer>
                {value => {
                let LayoutTag =
                    fullLayout === true
                    ? value.fullLayout
                    : value.state.activeLayout === "horizontal"
                    ? value.horizontalLayout
                    : value.VerticalLayout
                return (
                    <LayoutTag {...props} permission={props.user}>
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
            <RouteConfig exact path="/" component={() => <h1>HOLA SOY EL LOGIN</h1>} />
            <RouteConfig exact path="/dashboard" component={() => <h1>HOLA SOY EL DASHBOARD</h1>} />
        </Switch>
    </Router>
)

export default AppRouter