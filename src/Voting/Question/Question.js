import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import FlatCard from 'components/FlatCard'

import Header from './Header'
import Response from './Response'

const styles = {
  card: {
    padding: 0,
  },
  content: {
    padding: '20px 20px 10px',
    '@media (min-width: 1150px)': {
      padding: '70px 50px',
    },
  },
  backgroundCard: {
    position: 'absolute',
    width: '95%',
    margin: 0,
    top: -10,
    left: '2.5%',
    zIndex: -5,
    '@media (min-width: 1150px)': {
      display: 'none',
    },
  },
}

const Question = ({
  question,
  responses,
  length, index,
  onSelect,
}) => (
  <FlatCard style={styles.card}>
    <div style={styles.content}>
      {
        question ? (
          <div>
            <FlatCard style={styles.backgroundCard} />
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
    </div>
  </FlatCard>
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
