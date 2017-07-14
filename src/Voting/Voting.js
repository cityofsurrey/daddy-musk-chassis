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
    responses: {},
  }

  handleNextQuestion = () => {
    const { releasedQuestions } = this.props
    const { number, responses } = this.state
    if (responses[releasedQuestions[number].id]) {
      const max = releasedQuestions.length - 1
      this.setState({
        number:
        this.state.number < max ?
        this.state.number += 1 :
        max,
      })
    }
  }

  handleSelectResponse = (id, response) => {
    const responses = this.state.responses
    responses[id] = response
    this.setState({ responses })
  }

  render() {
    const { releasedQuestions, questions } = this.props
    const { number, responses } = this.state
    return (
      <div style={styles.root}>
        <div style={styles.backgroundHeader} />
        <Header title="Polltal" />
        <Question
          question={releasedQuestions[number]}
          responses={responses}
          number={number}
          length={releasedQuestions.length}
          onSelect={this.handleSelectResponse}
        />
        <div style={styles.navBtns}>
          <PrimaryButton
            style={styles.navBtn}
            onClick={this.handleNextQuestion}
            label={
              number === releasedQuestions.length - 1 ?
                <Link to="/thanks">Submit</Link> :
                'Next'
            }
          />
        </div>
      </div>
    )
  }
}

Voting.propTypes = {}
Voting.defaultProps = {}

export default Radium(Voting)
