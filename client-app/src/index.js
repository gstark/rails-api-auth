import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { browserHistory, Router, Route, Link } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
  </Router>, document.getElementById('root'))
