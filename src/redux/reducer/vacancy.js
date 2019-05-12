import * as types from '../constants/vacancy';

const initialState = {
  vacancies: null,
  activeVacancy: null,
};

const vacancy = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.FETCH_VACANCIES:
    case types.FETCH_COMPANY_VACANCIES:
      // eslint-disable-next-line
      let result = action.payload;

      if (action.city) {
        result = result.filter(item => item.cityName === action.city);
      }

      if (action.filterStr) {
        result = result.filter(item => item.position.includes(action.filterStr));
      }

      if (action.salary) {
        result = result.filter(item => item.salary >= +action.salary);
      }

      return {
        ...state,
        vacancies: result,
      };
    case types.FETCH_VACANCY:
      return {
        ...state,
        activeVacancy: action.payload,
      };
    case types.DELETE_VACANCY:
      return {
        ...state,
        vacancies: state.vacancies.filter(v => v.vacancyId !== action.payload),
      };
    default:
      return state;
  }
};

export default vacancy;
