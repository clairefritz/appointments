let appointmentId = 0;
export const addAppointment = (appointmentDetail) => {
  return {
    type: 'ADD_APPOINTMENT',
    id: appointmentId++,
    appointmentDetail
  }
};