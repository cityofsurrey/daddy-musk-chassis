import React from 'react'
import { withRouter } from 'react-router-dom'
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

const options = {
  options: props => ({
    variables: {
      id: '',
    },
  }),
}

export default graphql(queryQuestions, options)(withRouter(Voting))
