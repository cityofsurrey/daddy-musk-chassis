import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import Header from 'components/Header'
import theme from 'theme'

import Question from './Question'

const styles = {
  root: {
    padding: '15px 30px',
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
}

class Result extends Component {
  state = {}

  render() {
    const { questions } = this.props
    return (
      <div style={styles.root}>
        <div style={styles.backgroundHeader} />
        <Header title="Polltal" />
        {
          questions.map((question, index) => (
            <Question key={question.id} question={question} number={index} />
          ))
        }
      </div>
    )
  }
}

Result.propTypes = {}
Result.defaultProps = {}

export default Radium(Result)
