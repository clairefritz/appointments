import React, { Component, PropTypes } from 'react'
import Appointment from './Appointment'

export default class AppointmentsList extends Component {
  _renderAppointmentsList = () => {
    let appointments = this.props.appointments;
    if (appointments.length > 0) {
      return (
        <ul className="col-xs-12">
          <li className="row list-group-item-heading">
            <div className="col-xs-3">Name</div>
            <div className="col-xs-3">Date and time</div>
            <div className="col-xs-6">Notes</div>
          </li>
          {appointments.map(appointment => (<Appointment key={appointment.id} {...appointment}/>))}
        </ul>
      )
    } else {
      return (<p className="col-xs-12">No appointments have been entered yet. Please use the form in order to enter an appointment.</p>)
    }
  };

  render() {
    return (
      <div className="component-appointmentsList row">
        <h2 className="col-xs-12">Booked appointments</h2>
        {this._renderAppointmentsList()}
      </div>
    )
  }
};

AppointmentsList.propTypes = {
  appointments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    detail: PropTypes.object.isRequired
  }).isRequired).isRequired
};
