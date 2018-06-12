import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { DateTimePicker, DropdownList } from 'react-widgets'
import moment from 'moment'
import momentLocalizer from 'react-widgets-moment'
import { statusOptions, priorityOptions } from '../../Constants/NewTaskOptions'
import './NewTaskForm.css'
import 'react-widgets/dist/css/react-widgets.css'

momentLocalizer(moment)

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
  } else if (!/^[a-z0-9 ]+$/i.test(values.description)) {
    errors.description = 'Must be AlphaNumeric'
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
  handleFormSubmit = values => {
    // console.log(values)
    // const payload = {
    //   name: values.name,
    //   disabled: values.disabled
    // }
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
            name='status'
            type='text'
            label='Status'
            valueField='id'
            textField='name'
            data={statusOptions}
            component={renderDropdownList}
          />
          <Field
            name='priority'
            type='text'
            label='Priority'
            valueField='id'
            textField='name'
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
  defaultValue: PropTypes.number
}

NewTaskForm.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  updateClients: PropTypes.func,
  resetClientsStatus: PropTypes.func,
  clients: PropTypes.object
}

export default reduxForm({
  form: 'task_form',
  validate
})(NewTaskForm)
