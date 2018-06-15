import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getFormatedDate } from '../../utils/dateFormatter'
import pencilIcon from '../../Assets/Images/pencil.svg'
import './Task.css'

class Task extends Component {
  editTask = (id, status) => {
    this.props.history.push(`/task/id/${id}/${status}/edit`)
  }

  deleteTask = (id, status) => {
    this.props.deleteTask({ id, status })
  }

  changeStatus = newStatus => {
    const { tasks, id, status } = this.props
    this.props.changeTaskStatus({ newStatus, tasks, id, status })
  }

  render () {
    const {
      name,
      author,
      assigned,
      priority,
      description,
      status,
      due_date,
      id
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
        <button
          onClick={() => this.editTask(id, status)}
          className='editButton'
        >
          <img alt='edit' src={pencilIcon} className='editImage' />
        </button>
        <button
          onClick={() => this.deleteTask(id, status)}
          className='deleteButton'
        >
          {' '}X{' '}
        </button>
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
                onClick={() => this.changeStatus('todo')}
              >
                TO DO
              </div>}
            {status !== 'doing' &&
              <div
                className='assignButton doingButton'
                onClick={() => this.changeStatus('doing')}
              >
                DOING
              </div>}
            {status !== 'done' &&
              <div
                className='assignButton doneButton'
                onClick={() => this.changeStatus('done')}
              >
                DONE
              </div>}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Task)

Task.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  assigned: PropTypes.string,
  priority: PropTypes.string,
  status: PropTypes.string,
  due_date: PropTypes.any,
  changeTaskStatus: PropTypes.func,
  history: PropTypes.object,
  tasks: PropTypes.object,
  deleteTask: PropTypes.func
}
