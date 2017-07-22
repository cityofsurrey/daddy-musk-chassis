import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { Link } from 'react-router-dom'

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
    number: 0,
    feedback: {
      questions: [],
    },
    responses: {},
    loading: true,
  }

  componentWillReceiveProps = (nextProps) => {
    if (!nextProps.data.loading) {
      this.setState({
        loading: false,
        feedback: nextProps.data.feedback.feedback,
      })
    }
  }

  handleNextQuestion = () => {
    const { number, responses, feedback: { questions } } = this.state
    if (responses[questions[number].questionId]) {
      const max = questions.length - 1
      this.setState({
        number:
        this.state.number < max ?
        this.state.number += 1 :
        max,
      })
    }
  }

  handleSubmit = () => {

  }

  handleSelectResponse = (id, response) => {
    const { responses } = this.state
    responses[id] = response
    this.setState({ responses })
  }

  render() {
    const { loading, feedback, number, responses } = this.state
    return (
      <div style={styles.root}>
        <div style={styles.backgroundHeader} />
        <Header title="Polltal" />
        {/* TODO: optimistic UI */}
        {
          loading ? <div>Loading...</div> :
          <div>
            <Question
              question={feedback.questions[number]}
              responses={responses}
              number={number}
              length={feedback.questions.length}
              onSelect={this.handleSelectResponse}
            />
            <div style={styles.navBtns}>
              <PrimaryButton
                style={styles.navBtn}
                onClick={
                  number === feedback.questions.length - 1 ?
                  this.handleSubmit :
                  this.handleNextQuestion
                }
                label={
                  number === feedback.questions.length - 1 ?
                    'Submit' :
                    'Next'
                }
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
