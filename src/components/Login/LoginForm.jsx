import React, { useState } from 'react'
import styled from 'styled-components';

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

const Submit = styled.button`
  margin-top: 15px;
  height: 30px;
  font-size: 16px;
  color: #fff;
  background-color: #cbf0d9;
  border: 1px solid #cbf0d9;
  cursor: pointer;
`;

const LoginForm = ({ submit }) => {
  const [inputsState, setInputsState] = useState({
    login: '',
    password: '',
  });

  const [validationErrors, setValidationErrors] = useState('');

  const handleSubmit = (e, submit) => {
    e.preventDefault();
    setValidationErrors('');

    if (!isValid() === true) {
      setValidationErrors(ERRORS.invalidInput);
      return;
    }

    submit(inputsState)
      .then(res => {
        setValidationErrors(ERRORS.invalidCredentials);
      })
      .catch(err => console.log(err));
  }

  const isValid = () => {
    const { login, password } = inputsState;

    if (login === '' || password === '') {
      return false;
    }

    return true;
  }

  const handleChange = (e) => {
    setInputsState({
      ...inputsState,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <Root>
      {!!validationErrors && <Message>{validationErrors}</Message>}
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
      <Submit onClick={e => handleSubmit(e, submit)}>Login</Submit>
    </Root>
  );
};

export default LoginForm;
