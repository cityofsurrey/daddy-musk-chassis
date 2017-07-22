import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { gql, withApollo } from 'react-apollo'

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

  componentWillReceiveProps = (nextProps) => {
    if (!nextProps.data.loading) {
      const { actions: { createSurvey } } = this.props
      const feedback = nextProps.data.feedback ? nextProps.data.feedback.feedback : null

      createSurvey(feedback)
    }
  }

  handleReleaseAllQuestions = async () => this.props.questions.forEach(x => (this.handleReleaseQuestion(x.questionId)))

  handleReleaseQuestion = async (questionId, status = true) => {
    const { actions: { releaseQuestion } } = this.props
    try {
      const mutation = {
        mutation: gql`
          mutation updateStatus($updateInput: UpdateStatusInput!) {
            updateStatus(input: $updateInput) {
              feedback {
                feedbackId
                dashboardId
                votingId
                resultId
                questions {
                  question
                  options {
                    optionId
                    votes
                    label
                  }
                  status
                  questionId
                }
              }
              error
            }
          }
        `,
        variables: {
          updateInput: {
            questionId,
            status,
          },
        },
      }

      await this.props.client.mutate(mutation)
      releaseQuestion(questionId)
    } catch (err) {
      console.log(err)
    }
  }
  // TODO: separate container/presentational
  render() {
    const { actions, questions, votingId, resultId, history } = this.props
    return (
      <div style={styles.root}>
        <div style={styles.backgroundHeader} />
        <Header title="Polltal" />
        <PollLink id={votingId} />
        <div style={styles.questions}>
          <ReleaseAllQuestions onReleaseAll={this.handleReleaseAllQuestions} />
          <div style={theme.lineSeparator} />
          <Questions
            onRelease={this.handleReleaseQuestion}
            questions={questions}
          />
          <div style={theme.lineSeparator} />
        </div>
        <SecondaryButton onClick={() => history.push(`/result/${resultId}`)} style={styles.resultsBtn} label="Show Results" />
      </div>
    )
  }
}

Dashboard.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.objectOf(PropTypes.func),
  votingId: PropTypes.string,
}
Dashboard.defaultProps = {
  questions: [],
  actions: {},
  votingId: '',
}

const mapStateToProps = ({ survey }) => ({
  ...survey,
  questions: survey.questions,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...surveyActions }, dispatch),
})

export default Radium(connect(mapStateToProps, mapDispatchToProps)(withApollo(Dashboard)))
