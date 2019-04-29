import React from 'react';
import styled from 'styled-components';
import { func, string, node } from 'prop-types';

const Root = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Header = styled.h1`
  margin: 50px 0;
`;

const Auth = (props) => {
  const {
    action, push, header, form,
  } = props;

  const Form = form;

  const submit = data => action(data).then((json) => {
    if (json.login) {
      push('/dashboard');
    }
  });

  return (
    <Root>
      <Header>{header}</Header>
      <Form submit={submit} />
    </Root>
  );
};

Auth.propTypes = {
  action: func.isRequired,
  push: func.isRequired,
  header: string.isRequired,
  form: node.isRequired,
};

export default Auth;