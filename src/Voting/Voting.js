import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import Header from 'components/Header'
import PrimaryButton from 'components/Buttons/PrimaryButton'
import theme from 'theme'

import Question from './Question'

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
  navBtns: {
    display: 'flex',
    justifyContent: 'center',
  },
  navBtn: {
    margin: '0 5px',
    padding: '15px 30px',
  },
}

class Voting extends Component {
  state = {
    index: 0,
    feedback: {
      questions: [],
    },
    responses: {},
    loading: true,
    finished: false,
  }

  componentWillReceiveProps = (nextProps) => {
    if (!nextProps.data.loading) {
      const { feedback } = nextProps.data.feedback
      this.setState({
        loading: false,
        feedback: {
          ...feedback,
          // only show status === true questions
          questions: feedback.questions.filter(q => q.status),
        },
        finished: feedback.questions.length === 1,
      })
    }
  }

  handleUpdateVote = (questionId, optionId) => {
    try {
      this.props.submit({
        questionId,
        optionId,
      })
    } catch (err) {
      console.log(err)
    }
  }

  handleNextQuestion = () => {
    // TODO: change question text when no questions
    if (!this.state.feedback.questions.length) return

    const { index, finished, responses, feedback: { questions } } = this.state
    const questionId = questions[index].questionId
    const response = responses[questionId]

    if (response) {
      const max = questions.length - 1
      const newIndex = index < max ? index + 1 : max
      this.setState({
        index: newIndex,
        finished: newIndex === max,
      })
      this.handleUpdateVote(questionId, response)
    }
    if (finished) this.props.history.push('/thanks')
  }

  handleSelectResponse = (id, response) => {
    const { responses } = this.state
    responses[id] = response
    this.setState({ responses })
  }

  render() {
    const { finished, loading, feedback, index, responses } = this.state
    return (
      <div style={styles.root}>
        <div style={styles.backgroundHeader} />
        <Header title="Polltal" />
        {/* TODO: optimistic UI */}
        {
          loading ? <div>Loading...</div> :
          <div>
            <Question
              question={feedback.questions[index]}
              responses={responses}
              index={index}
              length={feedback.questions.length}
              onSelect={this.handleSelectResponse}
            />
            <div style={styles.navBtns}>
              <PrimaryButton
                style={styles.navBtn}
                onClick={this.handleNextQuestion}
                label={finished ? 'Finish' : 'Next'}
              />
            </div>
          </div>
        }
      </div>
    )
  }
}

Voting.propTypes = {}
Voting.defaultProps = {}

export default Radium(Voting)
