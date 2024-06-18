import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NotFound from './components/NotFound'
import Home from './components/Home'

import LoginForm from './components/LoginForm'
import './App.css'
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginForm} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)
// <Route exact path="/" component={Home} />
export default App
