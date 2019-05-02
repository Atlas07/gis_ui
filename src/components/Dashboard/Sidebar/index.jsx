import React, { useState } from 'react';
import styled from 'styled-components';
import { shape, func } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchVacancies } from '../../../redux/action/vacancy';

const Root = styled.div`
  width: 30%;
  background: #fafafa;
  padding: 10px;
`;

const Field = styled.label`
  margin: 15px 0;
  display: flex;
`;

const Input = styled.input`
  height: 30px;
  font-size: 16px;
  width: 100%;
`;

const Button = styled.button`
  padding: 0 15px;
`;

const Sidebar = ({ actions }) => {
  const [positionState, setPositionState] = useState('');

  const handlePositionChange = (e) => {
    e.preventDefault();

    setPositionState(e.target.value);
  };

  return (
    <Root>
      <Field>
        <Input type="text" placeholder="Fileter vacancies" onChange={handlePositionChange} />
        <Button onClick={() => actions.fetchVacancies(positionState)}>Apply</Button>
      </Field>
    </Root>
  );
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchVacancies }, dispatch),
});

Sidebar.propTypes = {
  actions: shape({
    fetchVacancies: func.isRequired,
  }).isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(Sidebar);
