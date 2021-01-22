import React, { lazy, Suspense } from 'react'
import {
  Router, Switch, Route, Redirect,
} from 'react-router-dom'
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
const WorkStationsList = lazy(() => import('./views/workstations/list'))
const WorkStationsAdd = lazy(() => import('./views/workstations/add'))
const WorkStationsEdit = lazy(() => import('./views/workstations/edit'))
const EmployeesList = lazy(() => import('./views/employees/list'))
const EmployeesAdd = lazy(() => import('./views/employees/add'))
const EmployeesEdit = lazy(() => import('./views/employees/edit'))
const ActivitiesList = lazy(() => import('./views/activities/list'))
const ActivitiesAdd = lazy(() => import('./views/activities/add'))
const ActivitiesEdit = lazy(() => import('./views/activities/edit'))
const TrainingsList = lazy(() => import('./views/trainings/list'))
const TrainingsAdd = lazy(() => import('./views/trainings/add'))
const TrainingsEdit = lazy(() => import('./views/trainings/edit'))
const TrainingDetail = lazy(() => import('./views/trainings/detail'))
const TrainingsHistorical = lazy(() => import('./views/trainings/historical'))
const ParticipantList = lazy(() => import('./views/trainings/participant'))
const ActionsList = lazy(() => import('./views/actions/list'))
const ActionsAdd = lazy(() => import('./views/actions/add'))
const ActionsEdit = lazy(() => import('./views/actions/edit'))
const AreasList = lazy(() => import('./views/areas/list'))
const AreasAdd = lazy(() => import('./views/areas/add'))
const AreasEdit = lazy(() => import('./views/areas/edit'))
const ProgramsList = lazy(() => import('./views/programs/list/'))
const ProgramsAdd = lazy(() => import('./views/programs/add'))
const ProgramsEdit = lazy(() => import('./views/programs/edit'))
const ProgramsDetail = lazy(() => import('./views/programs/detail'))
const ProgramsParticipantList = lazy(() => import('./views/programs/participant'))
const ProgramsHistorical = lazy(() => import('./views/programs/historical'))
const ControlsList = lazy(() => import('./views/controls/list/'))
const ControlsAdd = lazy(() => import('./views/controls/add'))
const ControlsEdit = lazy(() => import('./views/controls/edit'))

const AuthConfig = (props) => (
  <ContextAuth.Consumer>
    {({ user }) => {
      const { match } = props
      const login = !!((match.path === '/' || match.path === '/forgot-password'))
      if (!user && !login) { return <Redirect to="/" /> }
      if (user && login && user.role !== 'superadministrator') { return <Redirect to="/dashboard" /> }
      if (user && login && user.role === 'superadministrator') { return <Redirect to="/dashboard/enterprises" /> }
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
      <RouteConfig exact path="/dashboard/workstations" component={WorkStationsList} />
      <RouteConfig exact path="/dashboard/workstations/add" component={WorkStationsAdd} />
      <RouteConfig path="/dashboard/workstations/edit" component={WorkStationsEdit} />
      <RouteConfig exact path="/dashboard/employees" component={EmployeesList} />
      <RouteConfig path="/dashboard/employees/add" component={EmployeesAdd} />
      <RouteConfig path="/dashboard/employees/edit" component={EmployeesEdit} />
      <RouteConfig exact path="/dashboard/activities" component={ActivitiesList} />
      <RouteConfig path="/dashboard/activities/add" component={ActivitiesAdd} />
      <RouteConfig path="/dashboard/activities/edit" component={ActivitiesEdit} />
      <RouteConfig exact path="/dashboard/trainings" component={TrainingsList} />
      <RouteConfig path="/dashboard/trainings/add" component={TrainingsAdd} />
      <RouteConfig path="/dashboard/trainings/edit" component={TrainingsEdit} />
      <RouteConfig exact path="/dashboard/trainings/detail" component={TrainingDetail} />
      <RouteConfig exact path="/dashboard/trainings/participants" component={ParticipantList} />
      <RouteConfig exact path="/dashboard/trainings/historical/:employeeId" component={TrainingsHistorical} />
      <RouteConfig exact path="/dashboard/actions" component={ActionsList} />
      <RouteConfig path="/dashboard/actions/add" component={ActionsAdd} />
      <RouteConfig path="/dashboard/actions/edit" component={ActionsEdit} />
      <RouteConfig exact path="/dashboard/areas" component={AreasList} />
      <RouteConfig path="/dashboard/areas/add" component={AreasAdd} />
      <RouteConfig path="/dashboard/areas/edit" component={AreasEdit} />
      <RouteConfig exact path="/dashboard/programs" component={ProgramsList} />
      <RouteConfig exact path="/dashboard/programs/add" component={ProgramsAdd} />
      <RouteConfig exact path="/dashboard/programs/edit" component={ProgramsEdit} />
      <RouteConfig exact path="/dashboard/programs/detail" component={ProgramsDetail} />
      <RouteConfig exact path="/dashboard/programs/participants" component={ProgramsParticipantList} />
      <RouteConfig exact path="/dashboard/programs/historical/:employeeId" component={ProgramsHistorical} />
      <RouteConfig exact path="/dashboard/controls" component={ControlsList} />
      <RouteConfig exact path="/dashboard/controls/add" component={ControlsAdd} />
      <RouteConfig exact path="/dashboard/controls/edit" component={ControlsEdit} />
    </Switch>
  </Router>
)

export default AppRouter
