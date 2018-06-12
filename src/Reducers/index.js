import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { app } from './app'
import { loader } from './loader'
import { tasks } from './tasks'

const rootReducer = combineReducers({
  app,
  loader,
  tasks,
  form
})

export default rootReducer
