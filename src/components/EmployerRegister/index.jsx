import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { func, shape } from 'prop-types';

import { employerRegister } from '../../redux/action/auth';

import RegisterForm from './RegisterForm';
import Auth from '../Auth';

const EmployerRegister = (props) => {
  const { actions, history } = props;

  return (
    <Auth
      header="Register employer page"
      form={RegisterForm}
      push={history.push}
      action={actions.employerRegister}
    />
  );
};

EmployerRegister.propTypes = {
  actions: shape({
    employerRegister: func.isRequired,
  }).isRequired,
  history: shape({
    push: func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      employerRegister,
    },
    dispatch,
  ),
});

export default connect(
  null,
  mapDispatchToProps,
)(EmployerRegister);
