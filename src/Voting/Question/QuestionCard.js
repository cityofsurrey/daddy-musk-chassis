import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import Card from 'components/FlatCard'
import theme from 'theme'

import Header from './Header'
import Response from './Response'

const styles = {
  card: {
    padding: '20px 20px 10px',
  },
}

const Question = ({ question, number }) => (
  <Card style={styles.card}>
    <Header number={number} question={question} />
    <Response />
  </Card>
)

Question.propTypes = {}
Question.defaultProps = {}

export default Radium(Question)
