import { combineReducers } from 'redux'
import appointments from './appointments'

const appointmentsApp = combineReducers({
  appointments
});

export default appointmentsApp