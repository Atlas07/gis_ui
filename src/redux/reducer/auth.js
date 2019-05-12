import * as types from '../constants/auth';

const initialState = {
  user: {
    login: 'employer@gmail.com',
    role: 'E',
  },
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
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
