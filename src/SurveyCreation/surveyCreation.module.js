// ------------------------------------
// Constants
// ------------------------------------
const CREATE_SURVEY = 'CREATE_SURVEY'
const RELEASE_QUESTION = 'RELEASE_QUESTION'

// ------------------------------------
// Actions
// ------------------------------------
export const createSurvey = feedback => ({
  type: CREATE_SURVEY,
  feedback,
})

export const releaseQuestion = id => ({
  type: RELEASE_QUESTION,
  id,
})

export const actions = {
  createSurvey,
  releaseQuestion,
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const handleReleaseQuestion = (state, id) => state.map((q) => {
  const newQ = q
  if (q.questionId === id) newQ.status = !newQ.status
  return newQ
})

const ACTION_HANDLERS = {
  [CREATE_SURVEY]: (state, { feedback }) => ({
    ...state,
    ...feedback,
  }),
  [RELEASE_QUESTION]: (state, { id }) => ({
    ...state,
    questions: handleReleaseQuestion(state.questions, id),
  }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  questions: [],
}

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
