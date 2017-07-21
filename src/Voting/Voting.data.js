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

const questions = []

const releasedQuestions = questions.filter(q => q.released)

const votingWithData = props => <Voting releasedQuestions={releasedQuestions} questions={questions} {...props} />

export default graphql(queryQuestions, queryConfig())(votingWithData)
