import React, { Component } from 'react'
import { connect } from 'react-redux'
import update from 'immutability-helper'
import generate from 'shortid'

import { createSurvey } from './surveyCreation.module'
import Questions from './SurveyQuestions'

class SurveyCreation extends Component {
  state = {
    questions: {},
  }

  componentWillMount() {
    this.addQuestion()
  }

  createSurvey = () => {
    const { handleCreateSurvey, history } = this.props
    handleCreateSurvey(this.state.questions)
    history.push('/dashboard')
  }

  addQuestion = () => {
    const id = generate()
    this.setState({
      questions: update(this.state.questions, { $merge: {
        id: {
          name: id,
          question: '',
          answers: [],
          status: false,
        },
      } }),
    })
  }

  handleQuestionChange = (event) => {
    const { value, name } = event.target
    console.log(value, name)

    this.setState({
      questions: update(this.state.questions, { $merge: {
        [name]: {
          name,
          question: value,
        },
      } }),
    })
  }

  render() {
    return (
      <div>
        Create surveys here.
        <Questions onChange={this.handleQuestionChange} onAdd={this.addQuestion} questions={this.state.questions} />
        <button onClick={this.createSurvey}>Create</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  handleCreateSurvey(questions) {
    return dispatch(createSurvey(questions))
  },
})

export default connect(
  () => ({}),
  mapDispatchToProps,
)(SurveyCreation)
