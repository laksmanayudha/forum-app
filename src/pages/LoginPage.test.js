/**
 * test scenario for LoginPage Component
 *
 * should handle user input email correctly
 * should handle user input password correctly
 * should call login api when login button is clicked
 */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import store from '../states';
import LoginPage from './LoginPage';
import api from '../utils/api';

describe('LoginPage Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <LoginPage />
        </Provider>
      </BrowserRouter>,
    );
    api._login = api.login;
  });

  afterEach(() => {
    api.login = api._login;
    delete api._login;
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

  it('should call login api when login button is clicked', async () => {
    api.login = jest.fn();
    const emailInput = await screen.getByPlaceholderText('Your Email');
    const passwordInput = await screen.getByPlaceholderText('Your Password');
    const loginButton = await screen.getByRole('button', { name: 'Login' });
    // action
    await userEvent.type(emailInput, 'userEmail');
    await userEvent.type(passwordInput, 'userPassword');
    await userEvent.click(loginButton);
    // assert
    expect(api.login).toHaveBeenCalledWith({
      email: 'userEmail',
      password: 'userPassword',
    });
  });
});
