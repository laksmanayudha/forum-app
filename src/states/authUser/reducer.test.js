/**
 * test scenario for authUserReducer function
 *
 * should return initial state when given by unknown action
 * should return auth user when given by SET_AUTH_USER
 * should return null when given by UNSET_AUTH_USER
 */

import authUserReducer from './reducer';

describe('authUserReducer function', () => {
  it('should return initial state when given by unknown action', () => {
    // arrange
    const initialState = null;
    const unknownAction = { type: 'UNKNOWN_ACTION' };
    // action
    const nextState = authUserReducer(initialState, unknownAction);
    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return auth user when given by SET_AUTH_USER', () => {
    // arrange
    const initialState = null;
    const action = {
      type: 'SET_AUTH_USER',
      payload: {
        authUser: {
          id: 'john_doe',
          name: 'John Doe',
          email: 'john@example.com',
          avatar: 'https://generated-image-url.jpg',
        },
      },
    };
    // action
    const nextState = authUserReducer(initialState, action);
    // assert
    expect(nextState).toEqual(action.payload.authUser);
  });

  it('should return null when given by UNSET_AUTH_USER', () => {
    // arrange
    const initialState = {
      id: 'john_doe',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    };
    const action = { type: 'UNSET_AUTH_USER' };
    // action
    const nextState = authUserReducer(initialState, action);
    // assert
    expect(nextState).toEqual(null);
  });
});
