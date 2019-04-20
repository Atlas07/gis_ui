import axios from 'axios';
import * as types from '../constants/auth';

export const login = data => dispatch => (
  axios.post(
    'http://localhost:8080/auth/login', 
    {
      login: data.login,
      password: data.password,
    }, 
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    },
  )
    .then((res) => {
      dispatch({ 
        type: types.USER_LOGIN,
        payload: res.data
      })

      return res.data;
    })
);

export const register = data => dispatch => {
  const {
    login,
    password,
    name,
    description,
    officeLocation,
    coordX,
    coordY,
    city,
  } = data;

  return axios.post(
    'http://localhost:8080/auth/register', 
    {
      login,
      password,
      name,
      description,
      officeLocation,
      coordX,
      coordY,
      city,
    }, 
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    },
  )
    .then((res) => {
      dispatch({ 
        type: types.USER_REGISTER,
        payload: res.data
      });

      return res.data;
    })
};