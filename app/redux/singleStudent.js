import axios from 'axios';

export const SET_STUDENT = 'SET_STUDENT';
export const UPDATE_STUDENT = 'UPDATE_STUDENT';
// const UNREGISTER_STUDENT = 'UNREGISTER_STUDENT';

const setStudent = (student) => ({
  type: SET_STUDENT,
  student,
});

const updateStudent = (student) => {
  return {
    type: UPDATE_STUDENT,
    student,
  };
};

export const fetchStudent = (id) => async (dispatch) => {
  const studentResponse = await axios.get(`/api/students/${id}`);
  dispatch(setStudent(studentResponse.data));
};

export const updateStudentThunk = (student) => {
  console.log(`**********THUNK STUDENT: ${student}`);
  console.dir(student);
  return async (dispatch) => {
    try {
      const response = await axios.put(`/api/students/${student.id}`, student);
      console.log(`**********UPDATE STUDENT THUNK: ${response.data}`);
      dispatch(updateStudent(response.data));
    } catch (err) {
      console.log(`**********UPDATE STUDENT THUNK ERROR: ${err.response.data}`);
      console.log(err.response.data);
    }
  };
};

const studentReducer = (student = {}, action) => {
  switch (action.type) {
    case SET_STUDENT:
      return action.student;
    case UPDATE_STUDENT:
      return { ...student, ...action.student };
    default:
      return student;
  }
};

export default studentReducer;
