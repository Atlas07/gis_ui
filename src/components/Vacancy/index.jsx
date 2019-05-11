import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  shape, func, string, number,
} from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchVacancy } from '../../redux/action/vacancy';

import Map from './Map';
import Sidebar from './Sidebar';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 35px 0;
  font-family: sans-serif;
  width: 100%;
`;

const Header = styled.h1`
  font-size: 20px;
  margin-bottom: 40px;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;

  div:first-child {
    position: relative;
    flex: 2;
  }
`;

const Vacancy = (props) => {
  const { match, actions, vacancy } = props;

  useEffect(() => {
    actions.fetchVacancy(match.params.id);
  }, []);

  if (!vacancy) {
    return 'Loading...';
  }

  const coords = {
    lat: vacancy[0].coordX,
    lng: vacancy[0].coordY,
  };

  return (
    <Root>
      <Header>Vacancy page</Header>
      <Container>
        <Map coords={coords} />
        <Sidebar data={vacancy[0]} />
      </Container>
    </Root>
  );
};

const mapStateToProps = ({ vacancy }) => ({
  vacancy: vacancy.activeVacancy,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      fetchVacancy,
    },
    dispatch,
  ),
});

Vacancy.defaultProps = {
  vacancy: null,
};

Vacancy.propTypes = {
  actions: shape({
    fetchVacancy: func.isRequired,
  }).isRequired,
  match: shape({
    params: shape({
      id: string.isRequired,
    }).isRequired,
  }).isRequired,
  vacancy: shape({
    city: string.isRequired,
    coordX: number.isRequired,
    employerDescription: string.isRequired,
    employerLogin: string.isRequired,
    officeLocation: string.isRequired,
    position: string.isRequired,
    salary: number.isRequired,
  }),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Vacancy);
