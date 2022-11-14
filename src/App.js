import {Switch, Route, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute/index'
import Home from './components/Home'
import ActiveJobList from './components/ActiveJobs'
import DetailedView from './components/DetailedViewOfJob'
import NotFounded from './components/NotFound'

import './App.css'

const App = () => (
  <>
    <Switch>
      <Route path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/jobs" component={ActiveJobList} />
      <ProtectedRoute exact path="/jobs/:id" component={DetailedView} />
      <Route path="/not-found" component={NotFounded} />
      <Redirect to="not-found" />
    </Switch>
  </>
)

export default App
