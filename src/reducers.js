import { combineReducers } from 'redux'

import app from './app/app.module'
import survey from './SurveyCreation/surveyCreation.module'

export default combineReducers({
  app,
  survey,
})
