import * as types from '../constants/recruiter';

const recruiter = (state = null, action = {}) => {
  switch (action.type) {
    case types.FETCH_RECRUITERS:
      return action.payload;
    default:
      return state;
  }
};

export default recruiter;
