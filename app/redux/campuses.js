import axios from 'axios';
// import { SET_CAMPUS } from './singleCampus';

const SET_CAMPUSES = 'SET_CAMPUSES';

export const setCampuses = (campuses) => ({
  type: SET_CAMPUSES,
  campuses,
});

export const fetchCampuses = () => async (dispatch) => {
  const campusesResponse = await axios.get('/api/campuses');
  dispatch(setCampuses(campusesResponse.data));
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
// const initialState = {
//   campuses: [],
//   campus: {},
// };

export default function campusesReducer(candies = [], action) {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses;
    // case SET_CAMPUS:
    //   return state.map((campus) => {
    //     return campus.id === action.campus.id ? action.campus : campus;
    //   });
    default:
      return candies;
  }
}
