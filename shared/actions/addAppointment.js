let appointmentId = 0;
export default addAppointment = (text) => {
  return {
    type: 'ADD_APPOINTMENT',
    id: appointmentId++,
    text
  }
};