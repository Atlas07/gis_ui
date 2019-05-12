import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  shape, func, arrayOf, number, string,
} from 'prop-types';

import { addVacancy } from '../../redux/action/vacancy';
import { fetchCities } from '../../redux/action/city';
import { fetchRecruiters } from '../../redux/action/recruiter';

import Form from './Form';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  margin: 50px 0;
`;

const VacancyForm = (props) => {
  const { actions, history, cities, recruiters, employerEmail } = props;

  useEffect(() => {
    actions.fetchCities();
    actions.fetchRecruiters();
  }, []);

  const submit = (data) => {
    actions.addVacancy({ ...data, employerEmail }).then(() => console.log('redirect'));
  };

  if (!cities || !recruiters) {
    return 'Loading...';
  }

  return (
    <Root>
      <Header>Creating new vacancy</Header>
      <Form submit={submit} cities={cities} />
    </Root>
  );
};

VacancyForm.defaultProps = {
  cities: null,
  recruiter: null,
};

VacancyForm.propTypes = {
  history: shape({
    push: func.isRequired,
  }).isRequired,
  actions: shape({
    addVacancy: func.isRequired,
    fetchCities: func.isRequired,
    fetchRecruiters: func.isRequired,
  }).isRequired,
  cities: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
    }),
  ),
};

const mapStateToProps = ({ cities, auth, recruiters }) => ({
  cities,
  recruiters,
  employerEmail: auth.user.login,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      addVacancy,
      fetchCities,
      fetchRecruiters,
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VacancyForm);
