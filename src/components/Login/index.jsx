import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { shape, func } from 'prop-types';

import { login } from '../../redux/action/auth';

import LoginForm from './LoginForm';
import Auth from '../Auth';

const Login = (props) => {
  const { actions, history } = props;

  return <Auth header="Login page" form={LoginForm} push={history.push} action={actions.login} />;
};

Login.propTypes = {
  history: shape({
    push: func.isRequired,
  }).isRequired,
  actions: shape({
    login: func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      login,
    },
    dispatch,
  ),
});

export default connect(
  null,
  mapDispatchToProps,
)(Login);
