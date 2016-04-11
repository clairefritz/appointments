const appointment = (state, action) => {
  switch (action.type) {
    case 'ADD_APPOINTMENT':
      return {
        id: action.id,
        detail: action.appointmentDetail
      };
    default:
      return state
  }
};

const appointments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_APPOINTMENT':
      return [
        ...state,
        appointment(undefined, action)
      ];
    default:
      return state
  }
};

export default appointments;