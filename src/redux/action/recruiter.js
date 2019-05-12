import axios from 'axios';
import * as types from '../constants/recruiter';

// eslint-disable-next-line
export const fetchRecruiters = () => dispatch => axios
  .get(
    'http://localhost:8080/recruiter',
    {},
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    },
  )
  .then((res) => {
    dispatch({
      type: types.FETCH_RECRUITERS,
      payload: res.data,
    });

    return res.data;
  });
