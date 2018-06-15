import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'
import { NewTaskForm } from '../../Components'
import { statusOptions, priorityOptions } from '../../Constants/NewTaskOptions'
import * as taskActions from '../../Actions/TaskActions'

const mapStateToProps = ({ tasks }, ownProps) => {
  const editMode = ownProps.match.path === '/task/id/:id/:status/edit'
  let initialValues = {}
  if (editMode) {
    const taskInfo = _.find(tasks[ownProps.match.params.status], {
      id: +ownProps.match.params.id
    })
    initialValues = {
      id: taskInfo.id,
      name: taskInfo.name,
      author: taskInfo.author,
      description: taskInfo.description,
      status: _.find(statusOptions, { id: taskInfo.status }),
      priority: _.find(priorityOptions, { id: taskInfo.priority }),
      due_date: taskInfo.due_date,
      assigned: taskInfo.assigned
    }
  }
  return {
    tasks,
    initialValues,
    editMode
  }
}

const mapDispatchToProps = dispatch => {
  const actions = { ...taskActions }
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTaskForm)
