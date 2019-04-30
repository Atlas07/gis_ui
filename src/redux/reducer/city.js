import * as types from "../constants/city";

const city = (state = null, action = {}) => {
  switch (action.type) {
    case types.FETCH_CITIES:
      return action.payload;
    default:
      return state;
  }
};

export default city;
