import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getFormatedDate } from '../../utils/dateFormatter'
import pencilIcon from '../../Assets/Images/pencil.svg'
import './Task.css'

export default class Task extends Component {
  render () {
    const {
      name,
      author,
      assigned,
      priority,
      description,
      status,
      due_date
    } = this.props
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
        <button onClick={this.deleteTask} className='editButton'>
          <img alt='edit' src={pencilIcon} className='editImage' />
        </button>
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
          <div className='fieldContainer'>
            <span className='fieldLabels'>Due Date:&nbsp;</span>
            <span className='fieldValue'>
              {getFormatedDate(due_date)}
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
  description: PropTypes.string,
  assigned: PropTypes.string,
  priority: PropTypes.string,
  status: PropTypes.string,
  due_date: PropTypes.any,
  getTaskList: PropTypes.func
}
