import React, { PropTypes } from 'react'
import Moment from 'moment'

const Appointment = ({ detail }) => (
  <li className="row list-group-item">
    <div className="col-xs-3">{detail.name + " " + detail.forename}</div>
    <div className="col-xs-3">{Moment(detail.dateTime, Moment.ISO_8601).format('DD-MM-YYYY HH:mm')}</div>
    <div className="col-xs-6">{detail.notes}</div>
  </li>
);

Appointment.propTypes = {
  detail: PropTypes.object.isRequired
};

export default Appointment