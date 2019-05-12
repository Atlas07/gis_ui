import React from 'react';
import styled from 'styled-components';
import { shape, string } from 'prop-types';
import { connect } from 'react-redux';

import Worker from './Worker';
import Employer from './Employer';
import Recruiter from './Recruiter';

const Users = {
  W: <Worker />,
  E: <Employer />,
  R: <Recruiter />,
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  font-size: 25px;
  margin: 25px 0;
`;

const Dashboard = ({ auth }) => {
  const renderComponent = Users.E || Users[auth.user.role];

  return (
    <Root>
      <Header>Dashboard</Header>
      {renderComponent}
    </Root>
  );
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

Dashboard.propTypes = {
  auth: shape({
    login: string.isRequired,
    role: string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(Dashboard);
