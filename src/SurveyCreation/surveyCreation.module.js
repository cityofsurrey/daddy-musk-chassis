// ------------------------------------
// Constants
// ------------------------------------
const CREATE_SURVEY = 'CREATE_SURVEY'
const RELEASE_QUESTION = 'RELEASE_QUESTION'

// ------------------------------------
// Actions
// ------------------------------------
export const createSurvey = questions => ({
  type: CREATE_SURVEY,
  questions,
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

const handleReleaseQuestion = (state, id) => {
  const updatedQuestions = []
  state.forEach((q) => {
    const newQ = q
    if (q.id === id) newQ.released = !newQ.released
    updatedQuestions.push(newQ)
  })
  return updatedQuestions
}

const ACTION_HANDLERS = {
  [CREATE_SURVEY]: (state, { questions }) => ({
    ...state,
    questions,
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
  questions: [
    {
      id: 'SyxsVYp4Z',
      question: 'How do you feel about the Polltal Presentation?',
      answers: [],
      released: false,
    },
    {
      id: 'SkDi4Y6Vb',
      question: 'How do you feel about your workload?',
      answers: [],
      released: false,
    },
  ],
}

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
