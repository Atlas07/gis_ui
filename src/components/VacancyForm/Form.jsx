import React, { useState } from 'react';
import styled from 'styled-components';
import {
  func, arrayOf, shape, number, string,
} from 'prop-types';

const Root = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
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

const Select = styled.select`
  margin-top: 10px;
  height: 30px;
  font-size: 16px;
  border-radius: 0;
`;

const Form = ({ submit, cities }) => {
  const [inputsState, setInputsState] = useState({
    position: '',
    officeLocation: '',
    experience: '',
    salary: 0,
    coordX: 0.0,
    coordY: 0.0,
    city: '',
  });

  const [cityState, setCityState] = useState(cities[0].id);

  const handleSubmit = (e) => {
    e.preventDefault();

    submit({ ...inputsState, city: cityState }).catch(err => console.log(err));
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

  return (
    <Root>
      <Field>
        <label htmlFor="position">Position</label>
        <Input type="text" name="position" id="position" onChange={handleChange} />
      </Field>
      <Field>
        <label htmlFor="salary">Salary</label>
        <Input type="text" name="salary" id="salary" onChange={handleChange} />
      </Field>
      <Field>
        <label htmlFor="experience">Experience</label>
        <Input type="text" name="experience" id="experience" onChange={handleChange} />
      </Field>
      <Field>
        <label htmlFor="officeLocation">Office location</label>
        <Input type="text" name="officeLocation" id="officeLocation" onChange={handleChange} />
      </Field>
      <Field>
        <label htmlFor="coordX">Coord x</label>
        <Input type="text" name="coordX" placeholder="0.0" onChange={handleChange} />
      </Field>
      <Field>
        <label htmlFor="coordY">Coord y</label>
        <Input type="text" name="coordY" placeholder="0.0" onChange={handleChange} />
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

      <Submit onClick={e => handleSubmit(e, submit)}>Add</Submit>
    </Root>
  );
};

Form.propTypes = {
  submit: func.isRequired,
  cities: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
    }),
  ).isRequired,
};

export default Form;
