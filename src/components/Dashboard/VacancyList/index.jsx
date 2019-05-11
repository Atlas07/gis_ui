import React from 'react';
import styled from 'styled-components';
import { arrayOf, shape } from 'prop-types';
import { Link } from 'react-router-dom';

const Vacancy = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  margin: 10px;
  padding: 15px;
  border-radius: 3px;
  max-width: 300px;
`;

const Root = styled.div`
  width: 70%;
`;

const Field = styled.p``;

const Button = styled(Link)`
  border-radius: 2px;
  width: 100%;
  margin-top: 10px;
  font-size: 16px;
  padding: 5px 0;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  border: 1px solid #ccc;
`;

const VacancyList = ({ list }) => {
  const showVacancy = () => {};

  return (
    <Root>
      {list.map(vacancy => (
        <Vacancy key={vacancy.vacancyId}>
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
          <Button onClick={showVacancy} to={`/vacancy/${vacancy.vacancyId}`}>Get info</Button>
        </Vacancy>
      ))}
    </Root>
  );
};

VacancyList.propTypes = {
  list: arrayOf(shape({})).isRequired,
};

export default VacancyList;
