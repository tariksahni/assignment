import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Task.css'
// import style from '.././css/styles.css' //eslint-disable-line

export default class Task extends Component {
  render () {
    return (
      <div className='taskItem'>
        <div className='taskItemName'>
          <div className='taskItemNameText'>
            <span className='taskNameLabel'>{this.props.name}</span>
            <div className='authorContainer'>
              <span className='createdByLabel'>Created By: &nbsp;</span>
              <span className='createdByName'>{this.props.author}</span>
            </div>
          </div>
        </div>
        <button onClick={this.deleteTask} className='deleteButton'> X </button>
        <div className='taskItemBody'>
          <p>
            <span className='fieldLabels'>Assigned To:</span>
            {this.props.assigned}
          </p>
          <p>
            <span className='fieldLabels'>Priority Level:</span>
            {this.props.priority}
          </p>
          <p>{this.props.description}</p>
          <div className='assignButtonContainer'>
            <div className='assignButton toDoButton' onClick={this.toDoStatus}>
              TO DO
            </div>
            <div
              className='assignButton doingButton'
              onClick={this.doingStatus}
            >
              DOING
            </div>
            <div className='assignButton doneButton' onClick={this.doneStatus}>
              DONE
            </div>
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
