import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

const styles = {
  question: {
    textAlign: 'left',
  },
  label: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}

const Questions = ({ questions }) => (
  <div>
    {
      questions.map(({ id, question }, index) => (
        <div style={styles.question} key={id}>
          <div style={styles.label}>
            <span>Question {index + 1}</span>
            <span>Remove</span>
          </div>
          <div>{question}</div>
        </div>
      ))
    }
  </div>
)

Questions.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object),
}
Questions.defaultProps = {
  questions: [],
}

export default Radium(Questions)
