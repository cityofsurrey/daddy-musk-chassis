import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

const Questions = ({ questions }) => (
  <div>
    {
      questions.map(({ number, question }) => (
        <div>
          <div>
            <span>Question {number}</span>
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
