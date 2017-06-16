import React from 'react'
import PropTypes from 'prop-types'

const SurveyQuestions = ({
  questions, onAdd, onChange,
}) => (
  <div>
    {
      Object.keys(questions).map(id => (
        <div key={questions[id].name}>
          <input
            value={questions[id].question}
            name={questions[id].name}
            placeholder="Enter your question here"
            onChange={onChange}
          />
        </div>
      ))
    }
    <div><button onClick={onAdd}>Add</button></div>
  </div>
)

SurveyQuestions.propTypes = {
  questions: PropTypes.objectOf(PropTypes.object),
  onAdd: PropTypes.func,
  onChange: PropTypes.func,
}

SurveyQuestions.defaultProps = {
  questions: {},
  onAdd: () => {},
  onChange: () => {},
}

export default SurveyQuestions
