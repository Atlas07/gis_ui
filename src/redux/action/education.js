import axios from "axios";
import * as types from "../constants/education";

export const fetchUnivercities = () => dispatch =>
  axios
    .get(
      "http://localhost:8080/education",
      {},
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      },
    )
    .then(res => {
      dispatch({
        type: types.FETCH_UNIVERCITIES,
        payload: res.data,
      });

      return res.data;
    });
