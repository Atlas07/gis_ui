import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { func, shape } from "prop-types";

import { recruiterRegister } from "../../redux/action/auth";

import RegisterForm from "./RegisterForm";
import Auth from "../Auth";

const RecruiterRegister = props => {
  const { actions, history } = props;

  return (
    <Auth
      header='Register recruiter page'
      form={RegisterForm}
      push={history.push}
      action={actions.recruiterRegister}
    />
  );
};

RecruiterRegister.propTypes = {
  actions: shape({
    register: func.isRequired,
  }).isRequired,
  history: shape({
    push: func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      recruiterRegister,
    },
    dispatch,
  ),
});

export default connect(
  null,
  mapDispatchToProps,
)(RecruiterRegister);
