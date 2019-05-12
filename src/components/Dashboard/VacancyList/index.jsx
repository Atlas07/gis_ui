import React from 'react';
import styled from 'styled-components';
import {
  arrayOf, shape, bool, func,
} from 'prop-types';
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

const Create = styled(Button)`
  padding: 0 20px;
  text-align: center;
  margin: 10px;
`;

const RegularButton = styled.button`
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

const VacancyList = ({
  list, enableDeleting, enableEditing, deleteVacancy,
}) => {

  return (
    <Root>
      {enableEditing && (
        <Create to="/vacancy/new">
          Add new
        </Create>
      )}

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
          <Button to={`/vacancy/${vacancy.vacancyId}`}>
            Get info
          </Button>
          {enableEditing && <RegularButton>Edit</RegularButton>}
          {enableDeleting && (
            <RegularButton onClick={() => deleteVacancy(vacancy.vacancyId)}>Delete</RegularButton>
          )}
        </Vacancy>
      ))}
    </Root>
  );
};

VacancyList.defaultProps = {
  enableDeleting: false,
  enableEditing: false,
  enableCreating: false,
  deleteVacancy: () => {},
};

VacancyList.propTypes = {
  list: arrayOf(shape({})).isRequired,
  enableDeleting: bool,
  enableEditing: bool,
  enableCreating: bool,
  deleteVacancy: func,
};

export default VacancyList;
