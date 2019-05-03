import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  func, shape, arrayOf, number, string,
} from 'prop-types';

import { workerRegister } from '../../redux/action/auth';
import { fetchCities } from '../../redux/action/city';
import { fetchUnivercities } from '../../redux/action/education';

import RegisterForm from './RegisterForm';
import Auth from '../Auth';

const WorkerRegister = (props) => {
  const {
    actions, history, cities, univercities,
  } = props;

  useEffect(() => {
    actions.fetchCities();
    actions.fetchUnivercities();
  }, []);

  if (!cities || !univercities) {
    return 'Loading';
  }

  return (
    <Auth
      header="Register worker page"
      form={RegisterForm}
      push={history.push}
      action={actions.workerRegister}
      cities={cities}
      univercities={univercities}
    />
  );
};

WorkerRegister.defaultProps = {
  cities: null,
  univercities: null,
};

WorkerRegister.propTypes = {
  actions: shape({
    workerRegister: func.isRequired,
    fetchCities: func.isRequired,
    fetchUnivercities: func.isRequired,
  }).isRequired,
  history: shape({
    push: func.isRequired,
  }).isRequired,
  cities: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
    }),
  ),
};

const mapStateToProps = ({ cities, univercities }) => ({
  cities,
  univercities,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      workerRegister,
      fetchCities,
      fetchUnivercities,
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WorkerRegister);
