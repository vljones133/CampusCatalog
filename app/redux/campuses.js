import axios from 'axios';
// import { SET_CAMPUS } from './singleCampus';

const SET_CAMPUSES = 'SET_CAMPUSES';
const CREATE_CAMPUS = 'CREATE_CAMPUS';

export const setCampuses = (campuses) => ({
  type: SET_CAMPUSES,
  campuses,
});

const createCampus = (campus) => {
  return {
    type: CREATE_CAMPUS,
    campus,
  };
};

export const fetchCampuses = () => async (dispatch) => {
  const campusesResponse = await axios.get('/api/campuses');
  dispatch(setCampuses(campusesResponse.data));
};

export const createCampusThunk = (campus, history) => {
  return async (dispatch) => {
    const { data: created } = await axios.post('/api/campuss', campus);
    dispatch(createCampus(created));
    history.push('/');
  };
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers

export default function campusesReducer(campuses = [], action) {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses;
    case CREATE_CAMPUS:
      return [...campuses, action.campus];
    default:
      return campuses;
  }
}
