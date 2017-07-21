import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import Radium from 'radium'

import SecondaryButton from 'components/Buttons/SecondaryButton'
import Header from 'components/Header'
import theme from 'theme'

import PollLink from './PollLink'
import ReleaseAllQuestions from './ReleaseAllQuestions'
import Questions from './Questions'
import { actions as surveyActions } from '../SurveyCreation/surveyCreation.module'

const styles = {
  root: {
    padding: 15,
    textAlign: 'center',
  },
  backgroundHeader: {
    position: 'absolute',
    height: 60,
    width: '100%',
    top: 0,
    left: 0,
    zIndex: -1,
    transform: 'scaleX(1.1)',
    backgroundColor: theme.color.blue.primary,
    borderBottomLeftRadius: '50%',
    borderBottomRightRadius: '50%',
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
  // TODO: separate container/presentational
  render() {
    const { actions, questions, votingId } = this.props
    return (
      <div style={styles.root}>
        <div style={styles.backgroundHeader} />
        <Header title="Polltal" />
        <PollLink id={votingId} />
        <div style={styles.questions}>
          <ReleaseAllQuestions />
          <div style={theme.lineSeparator} />
          <Questions
            onRelease={actions.releaseQuestion}
            questions={questions}
          />
          <div style={theme.lineSeparator} />
        </div>
        <SecondaryButton style={styles.resultsBtn} label="Show Results" />
      </div>
    )
  }
}

Dashboard.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.objectOf(PropTypes.func),
}
Dashboard.defaultProps = {
  questions: [],
  actions: {},
}

const mapStateToProps = ({ survey }) => ({
  ...survey,
  questions: survey.questions,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...surveyActions }, dispatch),
})

export default Radium(connect(mapStateToProps, mapDispatchToProps)(Dashboard))
