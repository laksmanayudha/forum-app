/**
 * test scenario for RegisterPage Component
 *
 * should handle user input name correctly
 * should handle user input email correctly
 * should handle user input password correctly
 * should call register api when register button is clicked
 */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import store from '../states';
import RegisterPage from './RegisterPage';
import api from '../utils/api';

describe('RegisterPage Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      </BrowserRouter>,
    );
  });

  it('handle user input name correctly', async () => {
    // arrange
    const nameInput = await screen.getByPlaceholderText('Your Name');
    // action
    await userEvent.type(nameInput, 'userName');
    // assert
    expect(nameInput).toHaveValue('userName');
  });

  it('handle user input email correctly', async () => {
    // arrange
    const emailInput = await screen.getByPlaceholderText('Your Email');
    // action
    await userEvent.type(emailInput, 'userEmail');
    // assert
    expect(emailInput).toHaveValue('userEmail');
  });

  it('should handle user input password correctly', async () => {
    // arrange
    const passwordInput = await screen.getByPlaceholderText('Your Password');
    // action
    await userEvent.type(passwordInput, 'userPassword');
    // assert
    expect(passwordInput).toHaveValue('userPassword');
  });

  it('should call register api when register button is clicked', async () => {
    // arrange
    const spy = jest.spyOn(api, 'register');
    const nameInput = await screen.getByPlaceholderText('Your Name');
    const emailInput = await screen.getByPlaceholderText('Your Email');
    const passwordInput = await screen.getByPlaceholderText('Your Password');
    const registerButton = await screen.getByRole('button', { name: 'Register' });
    // action
    await userEvent.type(nameInput, 'userName');
    await userEvent.type(emailInput, 'userEmail');
    await userEvent.type(passwordInput, 'userPassword');
    await userEvent.click(registerButton);
    // assert
    expect(spy).toHaveBeenCalledWith({
      name: 'userName',
      email: 'userEmail',
      password: 'userPassword',
    });
  });
});
