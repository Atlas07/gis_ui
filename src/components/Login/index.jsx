import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { shape, func } from 'prop-types';

import { login } from '../../redux/action/auth';

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
  const { actions, history } = props;

  const submit = (data) => (
    actions.login(data)
      .then(json => {
        if (json.login) {
          history.push('/dashboard');
        }

        return 'Invalid credentials';
      })
  );

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
  actions: shape({
    login: func.isRequired,
  }).isRequired,
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    login,
  }, dispatch),
});

export default connect(null, mapDispatchToProps)(Login);
