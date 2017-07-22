import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import Card from 'components/FlatCard'

import Header from './Header'
import Response from './Response'

const styles = {
  card: {
    padding: '20px 20px 10px',
  },
  backgroundCard: {
    position: 'absolute',
    width: '95%',
    margin: 0,
    top: -10,
    left: '2.5%', // (parent Card width - this.width) / 2
    zIndex: -5,
  },
}

const Question = ({
  question: { questionId, question },
  responses,
  length, number,
  onSelect,
}) => (
  <Card style={styles.card}>
    <Card style={styles.backgroundCard} />
    <Header length={length} number={number} question={question} />
    <Response
      selected={responses[questionId]}
      onSelect={onSelect}
      id={questionId}
    />
  </Card>
)

Question.propTypes = {}
Question.defaultProps = {}

export default Radium(Question)
