import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import FlatCard from 'components/FlatCard'
import TextArea from 'components/TextArea'
import SecondaryButton from 'components/Buttons/SecondaryButton'

const styles = {
  root: {
    textAlign: 'center',
    padding: '30px 20px',
    '@media (min-width: 768px) and (max-width: 1150px)': {
      padding: 30,
    },
    '@media (min-width: 1150px)': {
      padding: '50px 60px',
      textAlign: 'left',
    },
  },
  card: {
    padding: 0,
  },
  title: {
    margin: '0 0 30px',
    '@media (min-width: 1150px)': {
      fontSize: 24,
    },
  },
  label: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: '10px 0 0',
  },
  addBtn: {
    margin: '30px 0 0',
  },
}

const SurveyQuestions = ({
  questions, addQuestion, onChange,
}) => (
  <FlatCard style={styles.card}>
    <div style={styles.root}>
      <div style={styles.title}>Enter questions to start your poll</div>
      {
        Object.keys(questions).map((id, index) => (
          <div key={id}>
            <div style={styles.label}>Question {index + 1}</div>
            <TextArea
              value={questions[id].question}
              name={id}
              placeholder="Type your question here..."
              onChange={onChange}
              rows={3}
            />
          </div>
        ))
      }
      <SecondaryButton onClick={addQuestion} style={styles.addBtn} label="+ Add Another Question" />
    </div>
  </FlatCard>
)

SurveyQuestions.propTypes = {
  questions: PropTypes.objectOf(PropTypes.object),
  onChange: PropTypes.func,
  addQuestion: PropTypes.func,
}

SurveyQuestions.defaultProps = {
  questions: {},
  onChange: () => {},
  addQuestion: () => {},
}

export default Radium(SurveyQuestions)
