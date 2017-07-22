import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import InternalLink from 'components/Link/InternalLink'

import theme from 'theme'

const styles = {
  root: {
    textAlign: 'left',
    margin: '40px 0',
  },
  question: {
    margin: '15px 0',
    fontSize: 20,
    fontFamily: theme.fontFamily.bold,
  },
  label: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 25,
  },
  questionLabel: {
    color: theme.color.grey.faded,
  },
  releaseLabel: {
    color: theme.color.blue.primary,
  },
  releasedIcon: {
    fontSize: 24,
    color: theme.color.green.primary,
  },
}

const Questions = ({ questions, onRelease }) => (
  <div>
    {
      questions.map(({ questionId, question, status }, index) => (
        <div style={styles.root} key={questionId}>
          <div style={styles.label}>
            <span style={styles.questionLabel}>Question {index + 1}</span>
            <InternalLink onClick={() => onRelease(questionId, !status)}>
              {
                status ?
                  <i style={styles.releasedIcon} className="fa fa-check" aria-hidden="true" /> :
                  'Release'
              }
            </InternalLink>
          </div>
          <div style={styles.question}>{question}</div>
        </div>
      ))
    }
  </div>
)

Questions.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object),
  onRelease: PropTypes.func,
}
Questions.defaultProps = {
  questions: [],
  onRelease: () => {},
}

export default Radium(Questions)
