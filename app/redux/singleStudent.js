import axios from 'axios';

export const SET_STUDENT = 'SET_STUDENT';

const setStudent = (student) => ({
  type: SET_STUDENT,
  student,
});

export const fetchStudent = (id) => async (dispatch) => {
  const studentsResponse = await axios.get(`/api/students/${id}`);
  dispatch(setStudent(studentsResponse.data));
};

export const updateStudent = (id, student) => async (dispatch) => {
  const studentsResponse = await axios.put(`/api/students/${id}`, student);
  dispatch(setStudent(studentsResponse.data));
};

const studentReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_STUDENT:
      return action.student;
    default:
      return state;
  }
};

export default studentReducer;
