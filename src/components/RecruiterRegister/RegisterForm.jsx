import React, { useState } from "react";
import styled from "styled-components";
import { func } from "prop-types";

import { ERRORS } from "../constants";

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
    login: "",
    password: "",
    name: "",
    phoneNumber: "",
    email: "",
    employerId: 0,
  });

  const [errorState, setErrorState] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    submit(inputsState).catch(() => setErrorState(ERRORS.userExists));
  };

  const handleChange = e => {
    setInputsState({
      ...inputsState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Root>
      {!!errorState && <Message>{errorState}</Message>}
      <Field>
        <label htmlFor='login'>Login</label>
        <Input type='text' name='login' placeholder='example@gmail.com' onChange={handleChange} />
      </Field>
      <Field>
        <label htmlFor='password'>Password</label>
        <Input
          type='password'
          name='password'
          placeholder='your password'
          onChange={handleChange}
        />
      </Field>
      <Field>
        <label htmlFor='name'>Name</label>
        <Input type='text' name='name' placeholder='your name' onChange={handleChange} />
      </Field>
      <Field>
        <label htmlFor='phoneNumber'>Phone number</label>
        <Input type='text' name='phoneNumber' placeholder='+380 ...' onChange={handleChange} />
      </Field>
      <Field>
        <label htmlFor='email'>Email</label>
        <Input type='text' name='email' placeholder='example@gmail.com' onChange={handleChange} />
      </Field>
      <Field>
        <label htmlFor='employerId'>Employer id</label>
        <Input
          type='text'
          name='employerId'
          placeholder='007'
          onChange={handleChange}
        />
      </Field>
      <Submit onClick={e => handleSubmit(e, submit)}>Register</Submit>
    </Root>
  );
};

RegisterForm.propTypes = {
  submit: func.isRequired,
};

export default RegisterForm;
