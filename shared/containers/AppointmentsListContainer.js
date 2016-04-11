import { connect } from 'react-redux'
import Moment from 'moment'
import AppointmentsList from '../components/AppointmentsList'

const getAppointments = (appointments) => {
  return appointments.sort((current, next) => {
    // parse the datetime data and sort by time
    return Moment(current.detail.dateTime, Moment.ISO_8601).isAfter(Moment(next.detail.dateTime, Moment.ISO_8601))
  });
};

const mapStateToProps = (state) => {
  return {
    appointments: getAppointments(state.appointments)
  }
};

const AppointmentsListContainer = connect(
  mapStateToProps
)(AppointmentsList);

export default AppointmentsListContainer