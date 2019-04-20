import React from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { shape, func } from 'prop-types';

import LoginForm from './LoginForm';

const Root = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  margin: 50px 0;
`;

const Login = (props) => {
  const submit = (data) => {
    const { push } = props.history;

    return axios.post(
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
      .then(res => res.data)
      .then(json => {
        if (json.login) {
          push('/dashboard');
        }

        return 'Invalid credentials';
      })
  }

  return (
    <Root>
      <Header>Login page</Header>
      <LoginForm submit={submit} />
    </Root>
  );
};

Login.propTypes = {
  history: shape({
    push: func.isRequired,
  }).isRequired,
}

export default Login;
