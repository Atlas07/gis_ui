import React from 'react';
import styled from 'styled-components';
import { string, number, shape } from 'prop-types';

const Root = styled.div`
  flex: 1;
  flex-direction: column;
  width: 40%;
  padding: 10px;
`;

const Header = styled.h2`
  text-align: center;
  font-size: 18px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

const Detail = styled.div`
  margin: 5px;
`;

const Sidebar = ({ data }) => (
  <Root>
    <Header>Details</Header>
    <Container>
      {Object.entries(data).map(([key, value]) => (
        <Detail>{`${key} - ${value}`}</Detail>
      ))}
    </Container>
  </Root>
);

Sidebar.propTypes = {
  data: shape({
    city: string.isRequired,
    coordX: number.isRequired,
    employerDescription: string.isRequired,
    employerLogin: string.isRequired,
    officeLocation: string.isRequired,
    position: string.isRequired,
    salary: number.isRequired,
  }).isRequired,
};
export default Sidebar;
