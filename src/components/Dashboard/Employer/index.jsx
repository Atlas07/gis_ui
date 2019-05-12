import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  shape, func, arrayOf, string,
} from 'prop-types';

import { fetchCompanyVacancies, deleteVacancy } from '../../../redux/action/vacancy';

import VacancyList from '../VacancyList';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const Header = styled.h1`
  margin: 15px 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
`;

const Employer = ({ vacancies, employerEmail, actions }) => {
  useEffect(() => {
    actions.fetchCompanyVacancies(employerEmail);
  }, []);

  if (!vacancies) {
    return 'Loading...';
  }

  return (
    <Root>
      <Header>Vacancies</Header>
      <Content>
        <VacancyList
          list={vacancies}
          enableCreating
          enableDeleting
          enableEditing
          deleteVacancy={actions.deleteVacancy}
        />
        {/* <Sidebar /> */}
      </Content>
    </Root>
  );
};

const mapStateToProps = () => ({ vacancy, auth }) => ({
  vacancies: vacancy.vacancies,
  employerEmail: auth.user.login,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchCompanyVacancies, deleteVacancy }, dispatch),
});

Employer.defaultProps = {
  vacancies: null,
};

Employer.propTypes = {
  actions: shape({
    fetchCompanyVacancies: func.isRequired,
    deleteVacancy: func.isRequired,
  }).isRequired,
  vacancies: arrayOf(shape({})),
  employerEmail: string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Employer);
