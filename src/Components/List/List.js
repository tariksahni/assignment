import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../'
import './List.css'

export default class List extends Component {
  render () {
    const { listHeading, type } = this.props
    var taskListNode = this.props.data.map(task => {
      return (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          author={task.author}
          due_date={task.due_date}
          description={task.description}
          assigned={task.assigned}
          priority={task.priority}
          status={task.status}
        />
      )
    })
    return (
      <div className={`listElement ${type}`}>
        <span className='listHeading'>{listHeading}</span>
        <div className='taskLists'>{taskListNode} </div>
      </div>
    )
  }
}

List.propTypes = {
  data: PropTypes.array,
  listHeading: PropTypes.string,
  getTaskList: PropTypes.func,
  type: PropTypes.string
}
