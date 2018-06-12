import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List } from '../'
import './DashBoard.css'

export default class DashBoard extends Component {
  state = {
    tasks: this.props.tasks
  }
  componentDidlMount () {
    this.props.getTaskList()
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    // console.log(nextProps)
  }

  render () {
    const { todo, doing, done } = this.state.tasks
    return (
      <div className='dashBoardContainer'>
        <div className='mainTitleContainer'>
          <h1 className='dashboardheading'>Successo</h1>
        </div>
        <div className='listContainer'>
          <List data={todo} listHeading={'To Do Tasks'} type={'todo'} />
          <List data={doing} listHeading={'Doing Tasks'} type={'doing'} />
          <List data={done} listHeading={'Done Tasks'} type={'done'} />
        </div>
      </div>
    )
  }
}

DashBoard.propTypes = {
  tasks: PropTypes.object,
  getTaskList: PropTypes.func
}
