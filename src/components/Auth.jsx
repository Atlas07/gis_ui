import React from 'react';
import styled from 'styled-components';
import {
  func, string, node, arrayOf, shape,
} from 'prop-types';

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
    action, push, header, form, cities, univercities,
  } = props;

  const Form = form;

  const submit = data => action(data).then((json) => {
    if (json.login) {
      push('/dashboard');
    }

    return json;
  });

  return (
    <Root>
      <Header>{header}</Header>
      <Form submit={submit} cities={cities} univercities={univercities} />
    </Root>
  );
};

Auth.propTypes = {
  action: func.isRequired,
  push: func.isRequired,
  header: string.isRequired,
  form: node.isRequired,
  cities: arrayOf(shape({})).isRequired,
  univercities: arrayOf(shape({})).isRequired,
};

export default Auth;
