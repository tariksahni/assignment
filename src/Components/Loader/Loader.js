import React from 'react'
import PropTypes from 'prop-types'

import './Loader.css'

const Loader = ({ text }) => {
  return (
    <div className='loader'>
      <div className='spinner'>
        <div className='bounce-1' />
        <div className='bounce-2' />
      </div>
      <div className='loader-text'>{text}</div>
    </div>
  )
}

Loader.propTypes = {
  text: PropTypes.string.isRequired
}

Loader.defaultProps = {
  text: 'Loading...'
}

export default Loader
