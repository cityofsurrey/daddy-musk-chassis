import React from 'react'
import { withRouter } from 'react-router-dom'
import { graphql, gql } from 'react-apollo'

import Result from './Result'

const queryQuestions = gql`
  query feedback($id: String!, $type: String!) {
    feedback(id: $id, type: $type){
      feedback {
        feedbackId
        dashboardId
        votingId
        resultId
        questions {
          questionId
          question
          options {
            optionId
            votes
            label
          }
          status
        }
      }
      error
    }
  }
`

const queryConfig = {
  options: props => ({
    variables: {
      id: props.match.params.pollId,
      type: 'resultId',
    },
  }),
}

export default graphql(queryQuestions, queryConfig)(withRouter(Result))
