import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { StyleRoot } from 'radium'

import Dashboard from './Dashboard'
import SurveyCreation from './SurveyCreation'

export default () => (
  <StyleRoot>
    <Router>
      <div>
        <Route exact path="/" component={SurveyCreation} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  </StyleRoot>
)
