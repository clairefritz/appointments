import React from 'react'
import { connect } from 'react-redux'
import { addAppointment } from '../actions'

// TODO: empty the form fields after submitting the form

let AppointmentsForm = ({ dispatch }) => {
  let inputs = {};

  let _onSubmit = (e)=> {
    e.preventDefault();
    dispatch(addAppointment(inputs));
    inputs = {};
  };

  let _handleChange = (key, e)=> {
    inputs[key] = e.target.value
  };

  return (
    <div className="component-appointmentsForm row">
      <h2 className="col-xs-12">Enter a new appointment</h2>
      <form onSubmit={_onSubmit} className="form-horizontal col-xs-6">
        <div>
          <input type="text" className="form-control" placeholder="Forename" onChange={_handleChange.bind(null, 'forename')} required/>
          <input type="text" className="form-control" placeholder="Name" onChange={_handleChange.bind(null, 'name')} required/>
          <input type="datetime-local" className="form-control" placeholder="Date and time" onChange={_handleChange.bind(null, 'dateTime')} required/>
        </div>
        <div>
          <textarea className="form-control" placeholder="Notes..." onChange={_handleChange.bind(null, 'notes')}/>
        </div>
        <button type="submit" className="btn btn-default">Add appointment</button>
      </form>
    </div>
  )
};
AppointmentsForm = connect()(AppointmentsForm);

export default AppointmentsForm