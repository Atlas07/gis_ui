import * as types from '../constants/education';

const education = (state = null, action = {}) => {
  switch (action.type) {
    case types.FETCH_UNIVERCITIES:
      return action.payload;
    default:
      return state;
  }
};

export default education;
