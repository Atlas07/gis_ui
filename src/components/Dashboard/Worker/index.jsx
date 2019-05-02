import React, { useEffect } from 'react';
import styled from 'styled-components';
import { func, shape, arrayOf } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchVacancies } from '../../../redux/action/vacancy';

import VacancyList from '../VacancyList';
import Sidebar from '../Sidebar';

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

const Worker = ({ vacancies, actions }) => {
  useEffect(() => {
    actions.fetchVacancies();
  }, []);

  if (!vacancies) {
    return 'Loading...';
  }

  return (
    <Root>
      <Header>Vacancies</Header>
      <Content>
        <VacancyList list={vacancies} />
        <Sidebar />
      </Content>
    </Root>
  );
};

const mapStateToProps = () => ({ vacancy }) => ({
  vacancies: vacancy.vacancies,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchVacancies }, dispatch),
});

Worker.defaultProps = {
  vacancies: null,
};

Worker.propTypes = {
  actions: shape({
    fetchVacancies: func.isRequired,
  }).isRequired,
  vacancies: arrayOf(shape({})),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Worker);
