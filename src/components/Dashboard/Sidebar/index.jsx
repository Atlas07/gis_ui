import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  shape, func, arrayOf, number, string,
} from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchVacancies } from '../../../redux/action/vacancy';
import { fetchCities } from '../../../redux/action/city';

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

const Select = styled.select`
  margin-top: 10px;
  height: 30px;
  font-size: 16px;
  border-radius: 0;
`;

const Button = styled.button`
  padding: 0 15px;
  width: 100%;
  height: 30px;
  border-radius: 2px;
  cursor: pointer;
  font-size: 16px;
`;

const Sidebar = ({ actions, cities }) => {
  useEffect(() => {
    actions.fetchCities();
  }, []);

  const [positionState, setPositionState] = useState('');
  const [salaryState, setSalaryState] = useState('');
  const [cityState, setCityState] = useState(cities && cities[0].id);

  if (!cities) {
    return null;
  }

  const handlePositionChange = (e) => {
    e.preventDefault();
    setPositionState(e.target.value);
  };

  const handleSalaryChange = (e) => {
    e.preventDefault();
    setSalaryState(e.target.value);
  };

  const handleCityChange = (e) => {
    setCityState(e.target.value);
  };

  return (
    <Root>
      <Field>
        <Input type="text" placeholder="Fileter vacancies" onChange={handlePositionChange} />
        <Input type="text" placeholder="Min salary" onChange={handleSalaryChange} />
      </Field>
      <Field>
        <Select onChange={handleCityChange}>
          <option name="all" value="">
            Select city
          </option>
          {cities.map(city => (
            <option name="city" value={city.name} key={city.id}>
              {city.name}
            </option>
          ))}
        </Select>
      </Field>
      <Button
        onClick={
          () => actions.fetchVacancies(positionState, salaryState, cityState)
          }
      >
        Apply
      </Button>
    </Root>
  );
};

const mapStateToProps = ({ cities }) => ({
  cities,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchVacancies, fetchCities }, dispatch),
});

Sidebar.defaultProps = {
  cities: null,
};

Sidebar.propTypes = {
  actions: shape({
    fetchVacancies: func.isRequired,
    fetchCities: func.isRequired,
  }).isRequired,
  cities: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
    }),
  ),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
