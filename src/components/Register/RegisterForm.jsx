import React, { useState } from 'react'
import styled from 'styled-components';

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

const Submit = styled.button`
  margin-top: 15px;
  height: 30px;
  font-size: 16px;
  color: #fff;
  background-color: #cbf0d9;
  border: 1px solid #cbf0d9;
  cursor: pointer;
`;

const RegisterForm = ({ submit }) => {
  const [inputsState, setInputsState] = useState({
    login: '',
    password: '',
    name: '',
    description: '',
    officeLocation: '',
    coordX: 0.0,
    coordY: 0.0,
    city: '',
  });

  const [errorState, setErrorState] = useState('');

  const handleSubmit = (e, submit) => {
    e.preventDefault();
    submit(inputsState)
      .catch(err => setErrorState('Such login already exists'));
  }

  const handleChange = (e) => {
    setInputsState({
      ...inputsState,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <Root>
      {!!errorState && <Message>{errorState}</Message>}
      <Field>
        <label htmlFor="login">Login</label>
        <Input
          type="text"
          name="login"
          placeholder="example@gmail.com"
          onChange={handleChange}
        />
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
        <Input
          type="text"
          name="name"
          placeholder="your name"
          onChange={handleChange}
        />
      </Field>
      <Field>
        <label htmlFor="description">Description</label>
        <Input
          type="text"
          name="description"
          placeholder="Say smth about company"
          onChange={handleChange}
        />
      </Field>
      <Field>
        <label htmlFor="officeLocation">Office location</label>
        <Input
          type="text"
          name="officeLocation"
          placeholder="Street, city, country"
          onChange={handleChange}
        />
      </Field>
      <Field>
        <label htmlFor="coordX">Coord x</label>
        <Input
          type="text"
          name="coordX"
          placeholder="0.0"
          onChange={handleChange}
        />
      </Field>
      <Field>
        <label htmlFor="coordY">Coord y</label>
        <Input
          type="text"
          name="coordY"
          placeholder="0.0"
          onChange={handleChange}
        />
      </Field>
      <Field>
        <label htmlFor="city">City</label>
        <Input
          type="text"
          name="city"
          placeholder="Your city"
          onChange={handleChange}
        />
      </Field>
      <Submit onClick={e => handleSubmit(e, submit)}>Register</Submit>
    </Root>
  );
};

export default RegisterForm;
