import {
  GET_TASKS_LIST,
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  CHANGE_STATUS
} from '../../Constants'

export const getTaskList = () => {
  return {
    type: GET_TASKS_LIST
  }
}

export const addTask = task => {
  return {
    type: ADD_TASK,
    payload: task
  }
}

export const changeTaskStatus = data => {
  return {
    type: CHANGE_STATUS,
    payload: data
  }
}

export const editTask = data => {
  return {
    type: EDIT_TASK,
    payload: data
  }
}

export const deleteTask = data => {
  return {
    type: DELETE_TASK,
    payload: data
  }
}
