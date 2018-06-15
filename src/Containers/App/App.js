import React from 'react'
import { connect } from 'react-redux'
import { Loader } from '../../Components'
import PropTypes from 'prop-types'
import Routes from '../../Routes'
import './App.css'

export class App extends React.Component {
  render () {
    const { isLoading } = this.props
    return (
      <div className='appContainer'>
        {isLoading && <Loader />}
        {<Routes />}
      </div>
    )
  }
}

App.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

const mapStateToProps = ({ loader }) => ({ isLoading: !!loader.count }) // samaj

export default connect(mapStateToProps, null)(App)
