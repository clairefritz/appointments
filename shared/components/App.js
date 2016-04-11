import React from 'react'
import AppointmentsListContainer from '../containers/AppointmentsListContainer'
import AppointmentsForm from '../containers/AppointmentsForm'

const App = () => (
  <div className="component-app container">
    <div className="row">
      <h1 className="col-xs-12">Appointments</h1>
    </div>
    <AppointmentsForm />
    <AppointmentsListContainer />
  </div>
);

export default App