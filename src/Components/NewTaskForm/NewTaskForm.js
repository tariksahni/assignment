'use strict'
import React from 'react'
// import style from '.././css/styles.css' //eslint-disable-line
// import axios from 'axios'

class NewTaskForm extends React.Component {
  constructor () {
    super()
    this.postTask = this.postTask.bind(this)
    this.onClick = this.onClick.bind(this)
    this.state = {
      showNewTaskForm: false
    }
  }

  onClick () {
    this.setState({ showNewTaskForm: !this.state.showNewTaskForm })
  }

  postTask () {
    var that = this
    const author = document.getElementById('authorInput').value
    const name = document.getElementById('titleInput').value
    const assigned = document.getElementById('assignedInput').value
    const description = document.getElementById('descriptionInput').value
    let priority = document.getElementById('priorityInput').value
    //   if (priority === 'Priority') {
    //     priority = 'Low'
    //   }
    //   axios
    //     .post('/tasks', {
    //       name: name,
    //       author: author,
    //       description: description,
    //       assigned: assigned,
    //       priority: priority
    //     })
    //     .then(response => {
    //       //eslint-disable-line

    //       that.props.handler()
    //     })
    //     .catch(error => {
    //       //eslint-disable-line
    //     })
    //   that.setState({ showNewTaskForm: !that.state.showNewTaskForm })
  }

  render () {
    return (
      <div id='newTaskFooter'>
        <div className='taskDiv'>
          <h2 id='newTaskHeader' onClick={this.onClick}>
            ADD NEW TASK
          </h2>
        </div>
        {this.state.showNewTaskForm
          ? <div>
            <select
              className='assignButton'
              id='priorityInput'
              name='priority'
              >
              <option>Priority</option>
              <option value='Low'>Low</option>
              <option value='Medium'>Medium</option>
              <option value='High'>High</option>
            </select>
            <input
              type='text'
              id='titleInput'
              name='title'
              placeholder='Task Title'
              />
            <input
              type='text'
              id='authorInput'
              name='author'
              placeholder='Author'
              />
            <input
              type='text'
              id='assignedInput'
              name='assigned'
              placeholder='Assign To'
              />
            <input
              type='text'
              id='descriptionInput'
              name='description'
              placeholder='Task Description'
              />
            <div
              className='assignButton'
              id='newTaskButton'
              onClick={this.postTask}
              >
                SUBMIT
              </div>
          </div>
          : null}
      </div>
    )
  }
}

export default NewTaskForm
