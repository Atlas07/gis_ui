import React, { useState } from 'react';
import styled from 'styled-components';
import {
  func, string, shape, arrayOf, number,
} from 'prop-types';

import { ERRORS } from '../constants';

const Root = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
`;

const Message = styled.div`
  margin: 10px 0;
  color: red;
`;

const Field = styled.label`
  margin: 15px 0;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-top: 10px;
  height: 30px;
  font-size: 16px;
`;

const Select = styled.select`
  margin-top: 10px;
  height: 30px;
  font-size: 16px;
  border-radius: 0;
`;

const Submit = styled.button`
  margin-top: 15px;
  height: 30px;
  font-size: 16px;
  color: #fff;
  background-color: #cbf0d9;
  border: 1px solid #cbf0d9;
  cursor: pointer;
`;

const RegisterForm = ({ submit, cities, univercities }) => {
  const [inputsState, setInputsState] = useState({
    login: '',
    password: '',
    name: '',
    position: '',
    experience: '',
    description: '',
    phoneNumber: '',
    email: '',
  });
  const [errorState, setErrorState] = useState('');
  const [cityState, setCityState] = useState(cities[0].id);
  const [univercityState, setUnivercityState] = useState(univercities[0].id);

  const handleSubmit = (e) => {
    e.preventDefault();
    submit({ ...inputsState, city: cityState, univercity: univercityState }).catch(() => setErrorState(ERRORS.userExists));
  };

  const handleChange = (e) => {
    setInputsState({
      ...inputsState,
      [e.target.name]: e.target.value,
    });
  };

  const handleCityChange = (e) => {
    setCityState(e.target.value);
  };

  const handleUnivercityChange = (e) => {
    setUnivercityState(e.target.value);
  };

  return (
    <Root>
      {!!errorState && <Message>{errorState}</Message>}
      <Field>
        <label htmlFor="login">Login</label>
        <Input type="text" name="login" placeholder="example@gmail.com" onChange={handleChange} />
      </Field>
      <Field>
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          name="password"
          placeholder="your password"
          onChange={handleChange}
        />
      </Field>
      <Field>
        <label htmlFor="name">Name</label>
        <Input type="text" name="name" placeholder="your name" onChange={handleChange} />
      </Field>
      <Field>
        <label htmlFor="position">Position</label>
        <Input type="text" name="position" placeholder="position" onChange={handleChange} />
      </Field>
      <Field>
        <label htmlFor="experience">Experience</label>
        <Input
          type="text"
          name="experience"
          placeholder="your experience"
          onChange={handleChange}
        />
      </Field>
      <Field>
        <label htmlFor="description">Description</label>
        <Input
          type="text"
          name="description"
          placeholder="your description"
          onChange={handleChange}
        />
      </Field>
      <Field>
        <label htmlFor="phoneNumber">Phone number</label>
        <Input type="text" name="phoneNumber" placeholder="+380 ..." onChange={handleChange} />
      </Field>
      <Field>
        <label htmlFor="email">Email</label>
        <Input type="text" name="email" placeholder="example@gmail.com" onChange={handleChange} />
      </Field>
      <Field>
        <label htmlFor="city">City</label>
        <Select onChange={handleCityChange}>
          {cities.map(city => (
            <option name="city" value={city.id} key={city.id}>
              {city.name}
            </option>
          ))}
        </Select>
      </Field>
      <Field>
        <label htmlFor="univercity">Univercity</label>
        <Select onChange={handleUnivercityChange}>
          {univercities.map(univercity => (
            <option name="univercity" value={univercity.id} key={univercity.id}>
              {univercity.name}
            </option>
          ))}
        </Select>
      </Field>
      <Submit onClick={e => handleSubmit(e, submit)}>Register</Submit>
    </Root>
  );
};

RegisterForm.propTypes = {
  submit: func.isRequired,
  cities: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
    }),
  ).isRequired,
  univercities: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
    }),
  ).isRequired,
};

export default RegisterForm;
