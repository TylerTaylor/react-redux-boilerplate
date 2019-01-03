import React from 'react'
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Dashboard from '../components/Dashboard'
import NotFound from '../components/NotFound'
import Login from '../components/Login'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute exact path="/" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />

        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter;