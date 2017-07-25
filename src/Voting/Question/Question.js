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
    left: '2.5%',
    zIndex: -5,
  },
}

const Question = ({
  question,
  responses,
  length, index,
  onSelect,
}) => (
  <Card style={styles.card}>
    {
      question ? (
        <div>
          <Card style={styles.backgroundCard} />
          <Header length={length} index={index} question={question.question} />
          <Response
            selected={responses[question.questionId]}
            onSelect={onSelect}
            id={question.questionId}
          />
        </div>
      ) :
        <div>No questions are released...</div>
    }
  </Card>
)

Question.propTypes = {
  question: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
    PropTypes.bool,
  ])),
  responses: PropTypes.objectOf(PropTypes.string),
  length: PropTypes.number,
  index: PropTypes.number,
  onSelect: PropTypes.func,
}
Question.defaultProps = {
  question: null,
  responses: {},
  length: 0,
  index: 0,
  onSelect: () => {},
}

export default Radium(Question)
