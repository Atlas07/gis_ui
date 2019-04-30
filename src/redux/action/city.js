import axios from "axios";
import * as types from "../constants/city";

export const fetchCities = () => dispatch => (
  axios.get(
    "http://localhost:8080/city",
    {},
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    },
  )
    .then((res) => {
      dispatch({
        type: types.FETCH_CITIES,
        payload: res.data,
      });

      return res.data;
    })
);