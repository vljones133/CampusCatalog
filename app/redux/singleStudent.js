import axios from 'axios';

export const SET_STUDENT = 'SET_STUDENT';
export const UPDATE_STUDENT = 'UPDATE_STUDENT';
export const UPDATE_CAMPUS_STUDENTS = 'UPDATE_CAMPUS_STUDENTS';

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

const updateCampusStudents = (student) => {
  return {
    type: UPDATE_CAMPUS_STUDENTS,
    student,
  };
};

export const fetchStudent = (id) => async (dispatch) => {
  const studentResponse = await axios.get(`/api/students/${id}`);
  dispatch(setStudent(studentResponse.data));
};

export const updateStudentThunk = (student) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/api/students/${student.id}`, student);
      dispatch(updateStudent(response.data));
    } catch (err) {
      console.log(err.response.data);
    }
  };
};

export const updateCampusStudentsThunk = (student) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/api/students/${student.id}`, student);
      dispatch(updateStudent(response.data));
    } catch (err) {
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
