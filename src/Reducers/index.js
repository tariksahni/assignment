import { combineReducers } from 'redux'
import { app } from './app'
import { loader } from './loader'
import { tasks } from './tasks'

const rootReducer = combineReducers({
  app,
  loader,
  tasks
})

export default rootReducer
