import React, { lazy, Suspense } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { history } from './history'
import { LoadingSpinner } from './components/@vuexy/Spinner'
import { ContextAuth } from './utility/context/Auth'
import { ContextLayout } from './utility/context/Layout'

const Login = lazy(() => import('./views/auth/Login'))
const Reset = lazy(() => import('./views/auth/Reset'))
const Dashboard = lazy(() => import('./views/dashboard'))
const EnterprisesList = lazy(() => import('./views/enterprises/list'))
const EnterprisesAdd = lazy(() => import('./views/enterprises/add'))
const EnterprisesEdit = lazy(() => import('./views/enterprises/edit'))
const JobsList = lazy(() => import('./views/jobs/list'))
const JobsAdd = lazy(() => import('./views/jobs/add'))
const JobsEdit = lazy(() => import('./views/jobs/edit'))
const EmployeesList = lazy(() => import('./views/employees/list'))
const EmployeesAdd = lazy(() => import('./views/employees/add'))
const EmployeesEdit = lazy(() => import('./views/employees/edit'))
const ActivitiesList = lazy(() => import('./views/activities/list'))
const ActivitiesAdd = lazy(() => import('./views/activities/add'))
const ActivitiesEdit = lazy(() => import('./views/activities/edit'))
const TrainingsList = lazy(() => import('./views/trainings/list'))
const TrainingsAdd = lazy(() => import('./views/trainings/add'))
const TrainingsEdit = lazy(() => import('./views/trainings/edit'))
const ProgramsList = lazy(() => import('./views/programs/list'))
const ActionsList = lazy(() => import('./views/actions/list'))
const AreasList = lazy(() => import('./views/areas/list'))
const AreasAdd = lazy(() => import('./views/areas/add'))
const AreasEdit = lazy(() => import('./views/areas/edit'))

const AuthConfig = (props) => (
  <ContextAuth.Consumer>
    {({ user }) => {
      const { match } = props
      const login = !!((match.path === '/' || match.path === '/forgot-password'))
      if (!user && !login) return history.push('/')
      if (user && login) return history.push('/dashboard')
      return props.children
    }}
  </ContextAuth.Consumer>
)

const RouteConfig = ({ component: Component, fullLayout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <AuthConfig {...props}>
        <ContextLayout.Consumer>
          {(value) => {
            const LayoutTag = fullLayout === true ? value.fullLayout : value.VerticalLayout
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
      <RouteConfig exact path="/" component={Login} fullLayout />
      <RouteConfig exact path="/forgot-password" component={Reset} fullLayout />
      <RouteConfig exact path="/dashboard" component={Dashboard} />
      <RouteConfig exact path="/dashboard/enterprises" component={EnterprisesList} />
      <RouteConfig path="/dashboard/enterprises/add" component={EnterprisesAdd} />
      <RouteConfig path="/dashboard/enterprises/edit" component={EnterprisesEdit} />
      <RouteConfig exact path="/dashboard/jobs" component={JobsList} />
      <RouteConfig exact path="/dashboard/jobs/add" component={JobsAdd} />
      <RouteConfig path="/dashboard/jobs/edit" component={JobsEdit} />
      <RouteConfig exact path="/dashboard/employees" component={EmployeesList} />
      <RouteConfig path="/dashboard/employees/add" component={EmployeesAdd} />
      <RouteConfig path="/dashboard/employees/edit" component={EmployeesEdit} />
      <RouteConfig exact path="/dashboard/activities" component={ActivitiesList} />
      <RouteConfig path="/dashboard/activities/add" component={ActivitiesAdd} />
      <RouteConfig path="/dashboard/activities/edit" component={ActivitiesEdit} />
      <RouteConfig exact path="/dashboard/trainings" component={TrainingsList} />
      <RouteConfig path="/dashboard/trainings/add" component={TrainingsAdd} />
      <RouteConfig path="/dashboard/trainings/edit" component={TrainingsEdit} />
      <RouteConfig exact path="/dashboard/programs" component={ProgramsList} />
      <RouteConfig exact path="/dashboard/actions" component={ActionsList} />
      <RouteConfig exact path="/dashboard/areas" component={AreasList} />
      <RouteConfig path="/dashboard/areas/add" component={AreasAdd} />
      <RouteConfig path="/dashboard/areas/edit" component={AreasEdit} />
    </Switch>
  </Router>
)

export default AppRouter
