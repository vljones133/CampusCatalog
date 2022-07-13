import axios from 'axios';

const SET_STUDENTS = 'SET_STUDENTS';
const CREATE_STUDENT = 'CREATE_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';

export const setStudents = (students) => ({
  type: SET_STUDENTS,
  students,
});

const createStudent = (student) => {
  return {
    type: CREATE_STUDENT,
    student,
  };
};

const deleteStudent = (student) => {
  return {
    type: DELETE_STUDENT,
    student,
  };
};

export const fetchStudents = () => async (dispatch) => {
  const studentsResponse = await axios.get('/api/students');
  dispatch(setStudents(studentsResponse.data));
};

export const createStudentThunk = (student, history) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/api/students`, student);
      dispatch(createStudent(response.data));
      history.push('/students');
    } catch (err) {
      console.log(err.response);
    }
  };
};

export const deleteStudentThunk = (id, history) => {
  return async (dispatch) => {
    try {
      const { data: student } = await axios.delete(`/api/students/${id}`);
      dispatch(deleteStudent(student));
      history.push('/students');
    } catch (err) {
      console.log(err.response);
    }
  };
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function studentsReducer(students = [], action) {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students;
    case CREATE_STUDENT:
      return [...students, action.student];
    case DELETE_STUDENT:
      return students.filter((student) => student.id !== action.student.id);
    default:
      return students;
  }
}
