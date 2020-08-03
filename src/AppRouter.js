import React, { lazy, Suspense } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { history } from './history'
import { LoadingSpinner } from './components/@vuexy/Spinner'
import { ContextAuth } from './utility/context/Auth'
import { ContextLayout } from './utility/context/Layout'

const Login = lazy(() => import('./views/auth/Login'))
const Reset = lazy(() => import('./views/auth/Reset'))
const EnterprisesList = lazy(() => import('./views/enterprises/list'))
const JobsList = lazy(() => import('./views/jobs/list'))
const WorkersList = lazy(() => import('./views/workers/list'))
const ActivitiesList = lazy(() => import('./views/activities/list'))
const TrainingsList = lazy(() => import('./views/trainings/list'))
const ProgramsList = lazy(() => import('./views/programs/list'))
const ActionsList = lazy(() => import('./views/actions/list'))
const AreasList = lazy(() => import('./views/areas/list'))

const AuthConfig = props => (
    <ContextAuth.Consumer>
        {({ user }) => {
            const { match } = props
            const login = (match.path === '/' || match.path === '/forgot-password') ? true : false;
            if (!user && !login) return history.push('/')
            if (user && login) return history.push('/dashboard')
            return props.children
        }}
    </ContextAuth.Consumer>
)

const RouteConfig = ({ component: Component, fullLayout, ...rest }) => (
    <Route
      {...rest}
      render={props => (
            <AuthConfig {...props}>
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
            </AuthConfig>
        )}
    />
)

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <RouteConfig exact path="/" component={Login} fullLayout/>
            <RouteConfig exact path="/forgot-password" component={Reset} fullLayout/>
            <RouteConfig exact path="/dashboard" component={() => <h1>HOLA SOY EL DASHBOARD</h1>} />
            <RouteConfig exact path="/dashboard/enterprises" component={EnterprisesList} />
            <RouteConfig exact path="/dashboard/jobs" component={JobsList} />
            <RouteConfig exact path="/dashboard/employees" component={WorkersList} />
            <RouteConfig exact path="/dashboard/activities" component={ActivitiesList} />
            <RouteConfig exact path="/dashboard/trainings" component={TrainingsList} />
            <RouteConfig exact path="/dashboard/programs" component={ProgramsList} />
            <RouteConfig exact path="/dashboard/actions" component={ActionsList} />
            <RouteConfig exact path="/dashboard/areas" component={AreasList} />
        </Switch>
    </Router>
)

export default AppRouter