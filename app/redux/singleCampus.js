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

const campusReducer = (campus = {}, action) => {
  switch (action.type) {
    case SET_CAMPUS:
      return action.campus;
    default:
      return campus;
  }
};

export default campusReducer;
