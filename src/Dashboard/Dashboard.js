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
    overflowX: 'hidden',
    maxWidth: 460,
    margin: '0 auto',
    '@media (min-width: 1150px)': {
      maxWidth: 625,
    },
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
  questionTitle: {
    margin: '40px 0 0',
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
  state = {
    loading: true,
    feedback: {},
  }

  componentWillMount = () => {
    window.scrollTo(0, 0)
  }

  componentWillReceiveProps = (nextProps) => {
    if (!nextProps.data.loading) {
      this.setState({
        loading: false,
        feedback: nextProps.data.feedback.feedback,
      })
    }
  }

  handleReleaseAllQuestions = async () => {
    this.state.feedback.questions.forEach((x) => {
      if (!x.status) this.handleReleaseQuestion(x.questionId)
    })
  }

  handleReleaseQuestion = async (questionId, status = true) => {
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

      const { data } = await this.props.client.mutate(mutation)
      this.setState({
        feedback: data.updateStatus.feedback,
      })
    } catch (err) {
      console.log(err)
    }
  }
  // TODO: separate container/presentational
  render() {
    const { history } = this.props
    const { questions, votingId, resultId } = this.state.feedback
    return (
      <div style={styles.root}>
        <div style={styles.backgroundHeader} />
        <Header title="Polltal" />
        <PollLink id={votingId} />
        <div style={styles.questions}>
          {/* <ReleaseAllQuestions onReleaseAll={this.handleReleaseAllQuestions} /> */}
          <div style={styles.questionTitle}>Poll Questions</div>
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

Dashboard.propTypes = {}
Dashboard.defaultProps = {}

// const mapStateToProps = ({ survey }) => ({
//   ...survey,
//   questions: survey.questions,
// })

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...surveyActions }, dispatch),
})

export default Radium(connect(() => ({}), mapDispatchToProps)(withApollo(Dashboard)))
