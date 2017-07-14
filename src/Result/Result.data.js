import React from 'react'
import { graphql, gql } from 'react-apollo'

import Result from './Result'

const queryQuestions = gql`
  query($id: String!) {
    questions(id: $id) {
      id
      questions
    }
  }
`

const queryConfig = props => ({
  options: {
    variables: {
      id: '',
    },
  },
})

const questions = [
  {
    "id": "Skdla7NSZ",
    "question": "How do you feel about the Polltal Presentation?",
    "responses": Array(20).fill('unsatisfied', 0, 4).fill('satisfied', 4, 10).fill('verySatisfied', 10, 20),
    "released": true
  },
  {
    "id": "BynbaQVBW",
    "question": "How do you feel about your workload?",
    "responses": [],
    "released": true
  },
  {
    "id": "ByW7-NNS-",
    "question": "How do you feel?",
    "responses": [],
    "released": false
  },
]

const resultWithData = props => <Result questions={questions} {...props} />

export default graphql(queryQuestions, queryConfig())(resultWithData)
