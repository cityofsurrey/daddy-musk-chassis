import React from 'react'
import { graphql, gql } from 'react-apollo'

import Voting from './Voting'

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
    "responses": [],
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
    "released": true
  },
]

const releasedQuestions = questions.filter(q => q.released)

const votingWithData = props => <Voting releasedQuestions={releasedQuestions} questions={questions} {...props} />

export default graphql(queryQuestions, queryConfig())(votingWithData)
