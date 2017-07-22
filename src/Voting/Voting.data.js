import { withRouter } from 'react-router-dom'
import { graphql, gql } from 'react-apollo'

import Voting from './Voting'

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
  options: ownProps => ({
    variables: {
      id: ownProps.match.params.pollId,
      type: 'votingId',
    },
  }),
}

export default graphql(queryQuestions, queryConfig)(withRouter(Voting))
