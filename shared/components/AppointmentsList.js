import React, { PropTypes } from 'react'
import Appointment from './Appointment'

const AppointmentsList = ({ todos, onTodoClick }) => (
  <ul>
    {appointments.map(appointment =>
      <Appointment
        key={appointment.id}
        {...appointment}
        onClick={() => onAppointmentClick(appointment.id)}
      />
    )}
  </ul>
);

AppointmentsList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    booked: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  onAppointmentClick: PropTypes.func.isRequired
};

export default AppointmentsList;