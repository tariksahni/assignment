import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { DateTimePicker, DropdownList } from 'react-widgets'
import moment from 'moment'
import momentLocalizer from 'react-widgets-moment'
import { priorityOptions } from '../../Constants/NewTaskOptions'
import './NewTaskForm.css'
import 'react-widgets/dist/css/react-widgets.css'

momentLocalizer(moment)
var id = 101

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  } else if (!/^[a-z0-9 ]+$/i.test(values.name)) {
    errors.name = 'Must be AlphaNumeric'
  }
  if (!values.author) {
    errors.author = 'Required'
  } else if (!/^[a-z0-9 ]+$/i.test(values.author)) {
    errors.author = 'Must be AlphaNumeric'
  }
  if (!values.assigned) {
    errors.assigned = 'Required'
  } else if (!/^[a-z0-9 ]+$/i.test(values.assigned)) {
    errors.assigned = 'Must be AlphaNumeric'
  }
  if (!values.description) {
    errors.description = 'Required'
  }
  if (!values.due_date) {
    errors.due_date = 'Required'
  }

  if (!values.priority) {
    errors.priority = 'Required'
  }
  return errors
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => {
  return (
    <div className='mainFieldContainer'>
      <label htmlFor={label} className='labelFeild label'>
        {label}
      </label>
      <div className='inputFeildContainer'>
        <input
          {...input}
          placeholder={label}
          type={type}
          className='inputField'
        />
        {touched && (error && <span className='errorField'>{error}</span>)}
      </div>
    </div>
  )
}

const renderDateTimePicker = ({
  input: { onChange, value },
  showTime,
  label,
  meta: { touched, error, warning },
  min
}) => (
  <div className='mainFieldContainer'>
    <label htmlFor={label} className='labelFeild label'>
      {label}
    </label>
    <DateTimePicker
      onChange={onChange}
      format='MMM DD YYYY'
      time={showTime}
      min={min}
      placeholder='Select Date'
      value={!value ? null : new Date(value)}
    />
    {touched && (error && <span className='errorColor'>{error}</span>)}
  </div>
)

const renderDropdownList = ({
  input: { onChange },
  data,
  label,
  valueField,
  textField,
  defaultValue,
  meta: { touched, error, warning }
}) => {
  return (
    <div className='mainFieldContainer'>
      <label htmlFor={label} className='labelFeild label'>
        {label}
      </label>
      <DropdownList
        data={data}
        valueField={valueField}
        textField={textField}
        onChange={onChange}
        defaultValue={defaultValue}
        placeholder='Select Value'
      />
      {touched && (error && <span className='errorColor'>{error}</span>)}
    </div>
  )
}

class NewTaskForm extends Component {
  componentDidMount () {
    this.props.initialize(this.props.initialValues)
  }
  handleFormSubmit = values => {
    const formValues = {
      author: values.author,
      name: values.name,
      description: values.description,
      priority: values.priority ? values.priority.id : 'low',
      due_date: values.due_date ? values.due_date : new Date(),
      assigned: values.assigned
    }
    if (this.props.editMode) {
      const payload = {
        id: this.props.initialValues.id,
        status: this.props.initialValues.status
          ? this.props.initialValues.status.id
          : 'todo',
        ...formValues
      }
      this.props.editTask(payload)
      this.props.history.push('/')
    } else {
      const payload = {
        id: id++,
        status: 'todo',
        ...formValues
      }
      this.props.addTask(payload)
      this.props.history.push('/')
    }
  }

  handleBackClick = () => {
    this.props.history.goBack()
  }

  render () {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <div className='newTaskConatiner'>
        <span className='heading'>ADD NEW TASK </span>
        <form
          onSubmit={handleSubmit(this.handleFormSubmit)}
          className='newFormContainer'
        >
          <Field
            name='name'
            type='text'
            component={renderField}
            label='Task Name'
          />
          <Field
            name='author'
            type='text'
            component={renderField}
            label='Author'
          />
          <Field
            name='assigned'
            type='text'
            component={renderField}
            label='Assigned To'
          />

          <Field
            name='due_date'
            label='Due Date'
            showTime={false}
            min={new Date()}
            component={renderDateTimePicker}
          />
          <Field
            name='priority'
            type='text'
            label='Priority'
            valueField='id'
            textField='name'
            defaultValue={this.props.initialValues.priority}
            data={priorityOptions}
            component={renderDropdownList}
          />
          <Field
            name='description'
            type='text'
            component={renderField}
            label='Task Description'
          />
          <div className='cancelSaveButton'>
            <button
              className='button'
              type='submit'
              disabled={pristine || submitting}
            >
              Submit
            </button>
            <button
              className='button'
              type='button'
              disabled={pristine || submitting}
              onClick={reset}
            >
              Undo Changes
            </button>
            <button
              className='button'
              type='button'
              onClick={this.handleBackClick}
            >
              Back
            </button>
          </div>
        </form>
      </div>
    )
  }
}

renderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  type: PropTypes.string
}

renderDateTimePicker.propTypes = {
  input: PropTypes.object,
  showTime: PropTypes.bool,
  label: PropTypes.string,
  meta: PropTypes.object,
  min: PropTypes.any
}

renderDropdownList.propTypes = {
  input: PropTypes.object,
  data: PropTypes.array,
  label: PropTypes.string,
  meta: PropTypes.object,
  valueField: PropTypes.string,
  textField: PropTypes.string,
  defaultValue: PropTypes.object
}

NewTaskForm.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  addTask: PropTypes.func,
  editTask: PropTypes.func,
  initialValues: PropTypes.object,
  initialize: PropTypes.func,
  editMode: PropTypes.bool
}

export default reduxForm({
  form: 'task_form',
  validate
})(NewTaskForm)
