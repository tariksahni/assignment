import {
  GET_TASKS_LIST,
  ADD_TASK,
  EDIT_TASK,
  CHANGE_STATUS
} from '../../Constants'

// export function getAppDetails () {
//   return dispatch => {
//     dispatch({ type: `${GET_APP_DETAILS}_PENDING` })
//     apiCallDemo().then(response => {
//       dispatch({ type: `${GET_APP_DETAILS}_FULFILLED` })
//     })
//   }
// }

// const apiCallDemo = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(true)
//     }, 2000)
//   })
// }

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

export const changeTaskStatus = newStatus => {
  return {
    type: CHANGE_STATUS,
    payload: newStatus
  }
}

export const editTask = newTask => {
  return {
    type: EDIT_TASK,
    payload: newTask
  }
}
