import axios from 'axios';

export const SET_CAMPUS = 'SET_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';

const setCampus = (campus) => ({
  type: SET_CAMPUS,
  campus,
});

const updateCampus = (campus) => {
  return {
    type: UPDATE_CAMPUS,
    campus,
  };
};

export const fetchCampus = (id) => async (dispatch) => {
  const campusResponse = await axios.get(`/api/campuses/${id}`);
  dispatch(setCampus(campusResponse.data));
};

export const updateCampusThunk = (campus, history) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/api/campuses/${campus.id}`, campus);

      dispatch(updateCampus(response.data));
    } catch (err) {
      console.log(err.response.data);
    }
  };
};

const campusReducer = (campus = {}, action) => {
  switch (action.type) {
    case SET_CAMPUS:
      return action.campus;
    case UPDATE_CAMPUS:
      // return campuses.map((campus) => {
      //   return campus.id === action.campus.id ? action.campus : campus;
      // });
      return action.campus;
    default:
      return campus;
  }
};

export default campusReducer;
