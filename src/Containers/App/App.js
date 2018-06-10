import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'
import { Loader } from '../../Components'
import PropTypes from 'prop-types'
import Routes from '../../Routes'
import './App.css'

export class App extends React.Component {
  // loadDataFromMongo () {
  //   this.props.dispatch(fetchDataFromMongo())
  // }

  // updateHandler () {
  //   this.loadDataFromMongo()
  // }

  // componentWillMount () {
  //   this.loadDataFromMongo()
  // }

  render () {
    const { isLoading } = this.props
    // console.log(isLoading)
    return (
      <div className='appContainer'>
        {isLoading && <Loader />}
        {<Routes />}
      </div>
    )
  }
  // render () {
  //   return (
  //     <div id='mainDiv'>
  //       <div id='titleDiv'>
  //         <h1 id='dashboardheading'>Successo</h1>
  //       </div>
  //       <ToDoBox data={this.props.toDo} handler={this.updateHandler} />
  //       <DoingBox data={this.props.doing} handler={this.updateHandler} />
  //       <DoneBox data={this.props.done} handler={this.updateHandler} />
  //       <NewTaskForm handler={this.updateHandler} />
  //     </div>
  //   )
  // }
}

App.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

const mapStateToProps = ({ loader }) => ({ isLoading: !!loader.count }) // samaj

const mapDispatchToProps = (dispatch, ownProps) => {
  const actions = {}
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
