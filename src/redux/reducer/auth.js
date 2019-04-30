import * as types from '../constants/auth';

const auth = (state = {}, action = {}) => {
  switch(action.type) {
    case types.USER_LOGIN:
    case types.USER_REGISTER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default auth;
