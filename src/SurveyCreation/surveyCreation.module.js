// ------------------------------------
// Constants
// ------------------------------------
const CREATE_SURVEY = 'CREATE_SURVEY'

// ------------------------------------
// Actions
// ------------------------------------
export const createSurvey = questions => ({
  type: CREATE_SURVEY,
  questions,
})

export const actions = {
  createSurvey,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CREATE_SURVEY]: (state, { questions }) => ({
    questions,
  }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  question: [],
}

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
