import axios from 'axios';
import * as types from '../constants/vacancy';

const VACANCY_URL = 'http://localhost:8080/vacancy';
const HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

export const fetchVacancies = (filterStr, salary, city) => dispatch => axios.get(VACANCY_URL, {}, { headers: HEADERS }).then((res) => {
  dispatch({
    type: types.FETCH_VACANCIES,
    payload: res.data,
    filterStr,
    salary,
    city,
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

export const fetchCompanyVacancies = email => dispatch => axios.post(`${VACANCY_URL}/company`, { email }, { headers: HEADERS }).then((res) => {
  dispatch({
    type: types.FETCH_COMPANY_VACANCIES,
    payload: res.data,
  });

  return res.data;
});

// export const deleteVacancy = id => dispatch =>
//   // axios.delete(`${VACANCY_URL}/${id}`, { headers: HEADERS }).then((res) => {
//   dispatch({
//     type: types.DELETE_VACANCY,
//     payload: id,
//   });

// // return res.data;
// // });

export const deleteVacancy = id => dispatch => {};

export const addVacancy = data => dispatch => axios.post(`${VACANCY_URL}/add`, data, { headers: HEADERS });
