import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Task } from '../../Components'
import * as taskActions from '../../Actions/TaskActions'

const mapStateToProps = ({ tasks }) => {
  return { tasks }
}

const mapDispatchToProps = dispatch => {
  const actions = { ...taskActions }
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Task)
