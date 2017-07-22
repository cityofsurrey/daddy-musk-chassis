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

const mutation = gql`
    mutation updateVote($voteInput: UpdateVoteInput!) {
      updateVote(input: $voteInput) {
        feedback {
          feedbackId
          dashboardId
          votingId
          resultId
          questions {
            question
            options {
              optionId
              label
              votes
            }
            status
            questionId
          }
        }
        error
      }
    }
  `
const mutateOptions = {
  props: ({ mutate }) => ({
    submit: ({ questionId, optionId }) => mutate({
      variables: {
        voteInput: {
          questionId,
          optionId,
        },
      },
    }),
  }),
}

const withMutate = graphql(mutation, mutateOptions)

const VotingWithQuery = graphql(queryQuestions, queryConfig)(withRouter(Voting))
const VotingWithMutation = withMutate(VotingWithQuery)

export default VotingWithMutation
