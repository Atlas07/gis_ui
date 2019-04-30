import axios from "axios";
import * as types from "../constants/auth";

export const login = data => dispatch =>
  axios
    .post(
      "http://localhost:8080/auth/login",
      {
        login: data.login,
        password: data.password,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      },
    )
    .then(res => {
      dispatch({
        type: types.USER_LOGIN,
        payload: res.data,
      });

      return res.data;
    });

export const employerRegister = data => dispatch => {
  const { login, password, name, description, officeLocation, coordX, coordY, city } = data;

  return axios
    .post(
      "http://localhost:8080/auth/register/employer",
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
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      },
    )
    .then(res => {
      dispatch({
        type: types.USER_REGISTER,
        payload: res.data,
      });

      return res.data;
    });
};

export const recruiterRegister = data => dispatch => {
  const { login, password, name, phoneNumber, email, employerId } = data;

  return axios
    .post(
      "http://localhost:8080/auth/register/recruiter",
      {
        login,
        password,
        name,
        phoneNumber,
        email,
        employerId,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      },
    )
    .then(res => {
      dispatch({
        type: types.USER_REGISTER,
        payload: res.data,
      });

      return res.data;
    });
};

export const workerRegister = data => dispatch => {
  const {
    login,
    password,
    name,
    position,
    experience,
    description,
    phoneNumber,
    email,
    city,
    univercity,
  } = data;

  return axios
    .post(
      "http://localhost:8080/auth/register/worker",
      {
        login,
        password,
        name,
        position,
        experience,
        description,
        phoneNumber,
        email,
        city,
        univercity,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      },
    )
    .then(res => {
      dispatch({
        type: types.USER_REGISTER,
        payload: res.data,
      });

      return res.data;
    });
};
