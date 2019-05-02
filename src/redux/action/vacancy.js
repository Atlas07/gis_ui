import axios from 'axios';
import * as types from '../constants/vacancy';

const VACANCY_URL = 'http://localhost:8080/vacancy';
const HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

export const fetchVacancies = filterStr => dispatch => axios.get(VACANCY_URL, {}, { headers: HEADERS }).then((res) => {
  dispatch({
    type: types.FETCH_VACANCIES,
    payload: res.data,
    filterStr,
  });

  return res.data;
});

export const fetchVacancy = id => dispatch => axios.get(`${VACANCY_URL}/${id}`, { headers: HEADERS }).then((res) => {
  dispatch({
    type: types.FETCH_VACANCY,
    payload: res.data,
  });

  return res.data;
});
