import React from 'react';
import styled from 'styled-components';
import { arrayOf, shape } from 'prop-types';

const Vacancy = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  margin: 10px;
  padding: 15px;
  cursor: pointer;
  border-radius: 3px;
  max-width: 300px;
`;

const Root = styled.div`
  width: 70%;
`;

const Field = styled.p``;

const VacancyList = ({ list }) => (
  <Root>
    {list.map(vacancy => (
      <Vacancy key={vacancy.id}>
        <Field>
          Position:
          {vacancy.position}
        </Field>
        <Field>
          Salary:
          {vacancy.salary}
$
        </Field>
        <Field>
          City:
          {vacancy.cityName}
        </Field>
      </Vacancy>
    ))}
  </Root>
);

VacancyList.propTypes = {
  list: arrayOf(shape({})).isRequired,
};

export default VacancyList;
