import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import theme from 'theme'

import Header from './Header'
import Responses from './Responses'

const styles = {
  root: {
    margin: '50px 0',
  },
}

class Question extends Component {
  state = {
    responseValues: {
      verySatisfied: 0,
      satisfied: 0,
      indifferent: 0,
      unsatisfied: 0,
      veryUnsatisfied: 0,
    },
    voteCount: 0,
  }

  componentWillMount = () => {
    const allResponses = {
      verySatisfied: 0,
      satisfied: 0,
      indifferent: 0,
      unsatisfied: 0,
      veryUnsatisfied: 0,
    }
    let count = 0
    this.props.question.options.forEach((response) => {
      allResponses[response.optionId] = response.votes
      count += response.votes
    })
    this.setState({ responseValues: allResponses, voteCount: count })
  }

  render() {
    const { question, number } = this.props
    return (
      <div style={styles.root}>
        <Header
          number={number}
          question={question}
          voteCount={this.state.voteCount}
        />
        <Responses
          length={this.state.voteCount}
          responseValues={this.state.responseValues}
        />
      </div>
    )
  }
}

Question.propTypes = {}
Question.defaultProps = {}

export default Radium(Question)
