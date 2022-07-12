import axios from 'axios';

export const SET_CAMPUS = 'SET_CAMPUS';

const setCampus = (campus) => ({
  type: SET_CAMPUS,
  campus,
});

export const fetchCampus = (id) => async (dispatch) => {
  const campusesResponse = await axios.get(`/api/campuses/${id}`);
  dispatch(setCampus(campusesResponse.data));
};

export const updateCampus = (id, campus) => async (dispatch) => {
  const campusesResponse = await axios.put(`/api/campuses/${id}`, campus);
  dispatch(setCampus(campusesResponse.data));
};

const campusReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CAMPUS:
      return action.campus;
    default:
      return state;
  }
};

export default campusReducer;
