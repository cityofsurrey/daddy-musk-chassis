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
  }

  componentWillMount = () => {
    const allResponses = {
      verySatisfied: 0,
      satisfied: 0,
      indifferent: 0,
      unsatisfied: 0,
      veryUnsatisfied: 0,
    }
    this.props.question.responses.forEach((response) => {
      allResponses[response] += 1
    })
    this.setState({ responseValues: allResponses })
  }

  render() {
    const { question, number } = this.props
    return (
      <div style={styles.root}>
        <Header
          number={number}
          question={question}
        />
        <Responses
          length={question.responses.length}
          responseValues={this.state.responseValues}
        />
      </div>
    )
  }
}

Question.propTypes = {}
Question.defaultProps = {}

export default Radium(Question)
