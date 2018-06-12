import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../'
import './List.css'

export default class List extends Component {
  render () {
    const { listHeading, type } = this.props
    var taskListNode = this.props.data.map(taskDataItem => {
      return (
        <Task
          key={1}
          uniqueID={1}
          name={'TARIK'}
          author={'Tarik Sahni'}
          description={
            'Do Task ABC Do Task ABC Do Task ABC Do Task ABC Do Task ABC Do Task ABC Do Task ABC Do Task ABC Do Task ABC Do Task ABC Do Task ABC Do Task '
          }
          assigned={'Tarik Sahni'}
          priority={'High'}
          status={'todo'}
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
