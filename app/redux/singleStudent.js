import axios from 'axios';

export const SET_STUDENT = 'SET_STUDENT';

const setStudent = (student) => ({
  type: SET_STUDENT,
  student,
});

export const fetchStudent = (id) => async (dispatch) => {
  const studentResponse = await axios.get(`/api/students/${id}`);
  dispatch(setStudent(studentResponse.data));
};

export const updateStudent = (id, student) => async (dispatch) => {
  const studentResponse = await axios.put(`/api/students/${id}`, student);
  dispatch(setStudent(studentResponse.data));
};

const studentReducer = (student = {}, action) => {
  switch (action.type) {
    case SET_STUDENT:
      return action.student;
    default:
      return student;
  }
};

export default studentReducer;
