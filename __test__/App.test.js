import React from 'react';
import { render, fireEvent, waitFor, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';



test('Load and displays starter data', async () => {
  render(<App />);
  const name = await waitFor(() => screen.findByTestId('name'));
  expect(name).toHaveTextContent(`My name is firas yacoup`);
  const age = await waitFor(() => screen.findByTestId('age'));
  expect(age).toHaveTextContent(`My age is 22`)
  const gender = await waitFor(() => screen.findByTestId('gender'));
  expect(gender).toHaveTextContent(`My gender is male`)
}); 


test('Change the data', async () => {

  render(<App />);
  const nameInput = screen.getByTestId("name-input");
  const ageInput = screen.getByTestId("age-input");
  const genderInput= screen.getByTestId("gender-input");
  const submit = screen.getByTestId( 'submit' );




  fireEvent.change(nameInput, { target: { value: 'firas' } });
  fireEvent.change(ageInput, { target: { value: '22' } });
  fireEvent.change(genderInput, { target: { value: 'male' } });
  fireEvent.click( submit );


  const nameOutput = await waitFor(() => screen.findByTestId("name"));
  const ageOutput = await waitFor(() => screen.findByTestId("age"));
  const genderOutput = await waitFor(() => screen.findByTestId("gender"));



  expect(nameInput).toHaveTextContent('Name: firas');
  expect(ageInput).toHaveTextContent('Age: 22');
  expect(genderInput).toHaveTextContent('Gender: male');


  expect( nameOutput.textContent ).toBe( 'My name is firas' );
  expect( ageOutput.textContent ).toBe( 'My age is 25' );
  expect( genderOutput.textContent ).toBe( 'My gender is male' );


});
