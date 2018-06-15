import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { loader } from './loader'
import { tasks } from './tasks'

const rootReducer = combineReducers({
  loader,
  tasks,
  form
})

export default rootReducer
