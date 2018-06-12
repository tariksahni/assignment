import {
  GET_TASKS_LIST,
  ADD_TASK,
  EDIT_TASK,
  CHANGE_STATUS
} from '../Constants'
import { todoTasks, doingTasks, doneTasks } from '../Constants/demoTasks'

const INITIAL_STATE = {
  todo: todoTasks,
  doing: doingTasks,
  done: doneTasks
}

export const tasks = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TASKS_LIST:
      return state
    case ADD_TASK:
      return { ...state, todo: [...state.todo, action.payload] }
    case EDIT_TASK:
      return state
    case CHANGE_STATUS:
      return state
    default:
      return state
  }
}
