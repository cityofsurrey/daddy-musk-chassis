import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { StyleRoot } from 'radium'

import Dashboard from './Dashboard'
import SurveyCreation from './SurveyCreation'
import Voting from './Voting'
import Result from './Result'
import Thanks from './Thanks'

const styles = {
  overflowX: 'hidden',
  maxWidth: 460,
  margin: '0 auto',
}

export default () => (
  <StyleRoot>
    <Router>
      <div style={styles}>
        <Route exact path="/" component={SurveyCreation} />
        <Route path="/dashboard/:pollId" component={Dashboard} />
        <Route path="/voting/:pollId" component={Voting} />
        <Route path="/result/:pollId" component={Result} />
        <Route path="/thanks" component={Thanks} />
      </div>
    </Router>
  </StyleRoot>
)
