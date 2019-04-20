import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { func, shape } from 'prop-types';

import { register } from '../../redux/action/auth';

import RegisterForm from './RegisterForm';

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

const Register = (props) => {
  const { actions, history } = props;

  const submit = (data) => (
    actions.register(data)
      .then(json => {
        if (json.login) {
          history.push('/dashboard');
        }
      })
  );

  return (
    <Root>
      <Header>Register page</Header>
      <RegisterForm submit={submit} />
    </Root>
  );
};

Register.propTypes = {
  actions: shape({
    register: func.isRequired,
  }).isRequired,
  history: shape({
    push: func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    register,
  }, dispatch),
});

export default connect(null, mapDispatchToProps)(Register);
