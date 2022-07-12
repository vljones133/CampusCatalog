import axios from 'axios';
import { SET_STUDENT } from './singleStudent';

const SET_STUDENTS = 'SET STUDENTS';

export const setStudents = (payload) => ({
  type: SET_STUDENTS,
  payload,
});

export const fetchStudents = () => async (dispatch) => {
  const studentsResponse = await axios.get('/api/students');
  dispatch(setStudents(studentsResponse.data));
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function studentsReducer(state = [], action) {
  switch (action.type) {
    case SET_STUDENTS:
      return action.payload;
    case SET_STUDENT:
      return state.map((student) => {
        return student.id === action.payload.id ? action.payload : student;
      });
    default:
      return state;
  }
}
