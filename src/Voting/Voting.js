import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import Header from 'components/Header'
import SecondaryButton from 'components/Buttons/SecondaryButton'
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
    const max = this.props.releasedQuestions.length - 1
    this.setState({
      number:
        this.state.number < max ?
        this.state.number += 1 :
        max,
    })
  }

  handlePreviousQuestion = () => {
    this.setState({
      number:
        this.state.number ?
        this.state.number -= 1 :
        0,
    })
  }

  render() {
    const { releasedQuestions, questions } = this.props
    const { number } = this.state
    return (
      <div style={styles.root}>
        <div style={styles.backgroundHeader} />
        <Header title="Polltal" />
        <Question question={releasedQuestions[number]} number={number + 1} />
        <div style={styles.navBtns}>
          <SecondaryButton style={styles.navBtn} onClick={this.handlePreviousQuestion} label="Back" />
          <PrimaryButton style={styles.navBtn} onClick={this.handleNextQuestion} label="Next" />
        </div>
      </div>
    )
  }
}

Voting.propTypes = {}
Voting.defaultProps = {}

export default Radium(Voting)
