import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import update from 'immutability-helper'
import generate from 'shortid'

import PrimaryButton from 'components/Buttons/PrimaryButton'
import theme from 'theme'

import { actions as surveyActions } from './surveyCreation.module'
import Header from './Header'
import Questions from './Questions'
import Email from './Email'

const styles = {
  root: {
    padding: '40px 15px',
    textAlign: 'center',
  },
  backgroundHeader: {
    position: 'absolute',
    height: 325,
    width: '100%',
    top: 0,
    left: 0,
    zIndex: -1,
    transform: 'scaleX(2)',
    backgroundColor: theme.color.blue.primary,
    borderBottomLeftRadius: '50%',
    borderBottomRightRadius: '50%',
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
    email: '',
  }

  componentWillMount() {
    this.handleAddQuestions()
  }

  handleCreateSurvey = () => {
    const { actions: { createSurvey }, history } = this.props
    const ids = Object.keys(this.state.questions)
    const filterEmpty = ids.filter((i) => {
      if (this.state.questions[i].question === '') return false
      return true
    })
    const questions = filterEmpty.map(i => this.state.questions[i])
    createSurvey(questions)
    history.push('/dashboard')
  }

  handleAddQuestions = () => {
    // generate id for dynamic controlled input
    const id = generate()
    this.setState({
      questions: update(this.state.questions, { $merge: {
        [id]: {
          id,
          question: '',
          answers: [],
          released: false,
        },
      } }),
    })
  }

  handleQuestionChange = (event) => {
    const { value, name } = event.target

    this.setState({
      questions: update(this.state.questions, { [name]: {
        $merge: { question: value },
      } }),
    })
  }

  handleInputChange = (event) => {
    const { value, name } = event.target
    // TODO: error

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.backgroundHeader} />
        <Header />
        <Email email={this.state.email} onChange={this.handleInputChange} />
        <Questions onChange={this.handleQuestionChange} addQuestion={this.handleAddQuestions} questions={this.state.questions} />
        <PrimaryButton style={styles.generateBtn} label="Generate Poll" onClick={this.handleCreateSurvey} />
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
