import axios from 'axios';
import { SET_CAMPUS } from './singleCampus';

const SET_CAMPUSES = 'SET CAMPUSES';

export const setCampuses = (payload) => ({
  type: SET_CAMPUSES,
  payload,
});

export const fetchCampuses = () => async (dispatch) => {
  const campusesResponse = await axios.get('/api/candies');
  dispatch(setCampuses(campusesResponse.data));
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function campusesReducer(state = [], action) {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.payload;
    case SET_CAMPUS:
      return state.map((campus) => {
        return campus.id === action.payload.id ? action.payload : campus;
      });
    default:
      return state;
  }
}
