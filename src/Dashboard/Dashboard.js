import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Radium from 'radium'

import SecondaryButton from 'components/Buttons/SecondaryButton'
import Header from 'components/Header'
import theme from 'theme'

import PollLink from './PollLink'
import ReleaseAllQuestions from './ReleaseAllQuestions'
import Questions from './Questions'

const styles = {
  root: {
    padding: 15,
    textAlign: 'center',
  },
  questions: {
    padding: '0 20px',
  },
  resultsBtn: {
    margin: '40px 0',
    border: theme.border.accent,
  },
}

class Dashboard extends Component {
  state = {}

  render() {
    return (
      <div style={styles.root}>
        <Header title="Polltal" />
        <PollLink />
        <div style={styles.questions}>
          <ReleaseAllQuestions />
          <div style={theme.lineSeparator} />
          <Questions questions={this.props.questions} />
          <div style={theme.lineSeparator} />
        </div>
        <SecondaryButton style={styles.resultsBtn} label="Show Results" />
      </div>
    )
  }
}

Dashboard.propTypes = {}
Dashboard.defaultProps = {}

const mapStateToProps = state => ({
  questions: state.survey.questions,
})

export default Radium(connect(mapStateToProps, {})(Dashboard))
