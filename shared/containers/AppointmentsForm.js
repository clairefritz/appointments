import React from 'react'
import { connect } from 'react-redux'
import { addAppointment } from '../actions'

let AppointmentsForm = ({ dispatch }) => {
  let input;

  _onSubmit = ()=> {

  };

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return
        }
        dispatch(addAppointment(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">Add appointment</button>
      </form>
    </div>
  )
};
AppointmentsForm = connect()(AppointmentsForm);

export default AppointmentsForm