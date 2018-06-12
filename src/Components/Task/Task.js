import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Task.css'

export default class Task extends Component {
  render () {
    const { name, author, assigned, priority, description, status } = this.props
    return (
      <div className='taskItem'>
        <div className='taskItemName'>
          <div className='taskItemNameText'>
            <span className='taskNameLabel'>{name}</span>
            <div className='authorContainer'>
              <span className='createdByLabel'>Created By: &nbsp;</span>
              <span className='createdByName'>{author}</span>
            </div>
          </div>
        </div>
        <button onClick={this.deleteTask} className='deleteButton'> X </button>
        <div className='taskItemBody'>
          <div className='fieldContainer'>
            <span className='fieldLabels'>Assigned To:&nbsp;</span>
            <span className='fieldValue'>{assigned}</span>
          </div>
          <div className='fieldContainer'>
            <span className='fieldLabels'>Priority Level:&nbsp;</span>
            <span className='fieldValue'>
              {priority}
            </span>
          </div>
          <span className='fieldContainerDescription'>
            {description}
          </span>
          <div className='assignButtonContainer'>
            {status !== 'todo' &&
              <div
                className='assignButton toDoButton'
                onClick={this.toDoStatus}
              >
                TO DO
              </div>}
            {status !== 'doing' &&
              <div
                className='assignButton doingButton'
                onClick={this.doingStatus}
              >
                DOING
              </div>}
            {status !== 'done' &&
              <div
                className='assignButton doneButton'
                onClick={this.doneStatus}
              >
                DONE
              </div>}
          </div>
        </div>
      </div>
    )
  }
}

Task.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string,
  key: PropTypes.number,
  description: PropTypes.string,
  assigned: PropTypes.string,
  priority: PropTypes.string,
  status: PropTypes.string,
  getTaskList: PropTypes.func
}
