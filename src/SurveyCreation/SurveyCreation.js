import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import update from 'immutability-helper'
import generate from 'shortid'

import PrimaryButton from 'components/Buttons/PrimaryButton'

import { actions as surveyActions } from './surveyCreation.module'
import Header from './Header'
import Questions from './Questions'
import Email from './Email'

const styles = {
  root: {
    padding: '40px 15px',
    textAlign: 'center',
  },
  generateBtn: {
    margin: '30px 0 20px',
  },
  footerText: {
    padding: '0 50px',
  },
  credits: {
    padding: 50,
  },
}

class SurveyCreation extends Component {
  state = {
    questions: {},
  }

  componentWillMount() {
    this.handleAddQuestions()
  }

  handleCreateSurvey = () => {
    const { actions: { createSurvey }, history } = this.props
    createSurvey(this.state.questions)
    history.push('/dashboard')
  }

  handleAddQuestions = () => {
    const id = generate()
    this.setState({
      questions: update(this.state.questions, { $merge: {
        [id]: {
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
      <div style={styles.root}>
        <Header />
        <Email />
        <Questions onChange={this.handleQuestionChange} addQuestion={this.handleAddQuestions} questions={this.state.questions} />
        <PrimaryButton style={styles.generateBtn} label="Generate Poll" />
        <div style={styles.footerText}>By generating your poll, you agree to the Terms of Service.</div>
        <div style={styles.credits}>Designed and Developed by the Polltal team</div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...surveyActions }, dispatch),
})

export default connect(
  () => ({}),
  mapDispatchToProps,
)(SurveyCreation)
