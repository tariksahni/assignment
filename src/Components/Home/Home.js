import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Home extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.appDetails.name}</h1>
      </div>
    )
  }
}

Home.propTypes = {
  appDetails: PropTypes.object.isRequired
}
