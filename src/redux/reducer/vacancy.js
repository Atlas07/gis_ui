import * as types from '../constants/vacancy';

const initialState = {
  vacancies: null,
  activeVacancy: null,
};

const vacancy = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.FETCH_VACANCIES:
      return {
        ...state,
        vacancies: action.payload,
      };
    case types.FETCH_VACANCY:
      return {
        ...state,
        activeVacancy: action.payload,
      };
    default:
      return state;
  }
};

export default vacancy;