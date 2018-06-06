import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import './App.css'
import { Home, Login, Loader } from '../../Components'
import * as actions from '../../Actions/appActions'

class App extends Component {
  constructor (props) {
    super(props)
    props.getAppDetails()
  }

  render () {
    const { app, isLoading } = this.props

    return (
      <div className='app'>
        {isLoading && <Loader />}
        <Router>
          <div className='container'>
            <Route exact path='/' render={() => <Home appDetails={app} />} />
            <Route path='/login' component={Login} />
          </div>
        </Router>
      </div>
    )
  }
}

App.propTypes = {
  app: PropTypes.object.isRequired,
  getAppDetails: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
  return {
    app: state.app,
    isLoading: !!state.loader.count
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
