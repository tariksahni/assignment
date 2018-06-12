import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { DashBoard, NewTaskForm } from '../Containers'
import './style.css'

export default class Routes extends Component {
  render () {
    return (
      <Router>
        <div className='routeContainer'>
          <Route exact path='/' component={DashBoard} />
          <Route exact path='/new-task' component={NewTaskForm} />
          <Route exact path='/task/:id/edit' component={NewTaskForm} />
        </div>
      </Router>
    )
  }
}
