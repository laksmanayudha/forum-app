/**
 * test scenario for usersReducer function
 *
 * should return initial state when given by unknown action
 * should return users when given by RECEIVE_USERS action
 */

import usersReducer from './reducer';

describe('usersReducer function', () => {
  it('should return initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const unknownAction = { type: 'UNKNOWN_ACTION' };
    // action
    const nextState = usersReducer(initialState, unknownAction);
    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return users when given by RECEIVE_USERS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_USERS',
      payload: {
        users: [
          {
            id: 'john_doe',
            name: 'John Doe',
            email: 'john@example.com',
            avatar: 'https://generated-image-url.jpg',
          },
          {
            id: 'jane_doe',
            name: 'Jane Doe',
            email: 'jane@example.com',
            avatar: 'https://generated-image-url.jpg',
          },
          {
            id: 'fulan',
            name: 'Si Fulan',
            email: 'fulan@example.com',
            avatar: 'https://generated-image-url.jpg',
          },
        ],
      },
    };
    // action
    const nextState = usersReducer(initialState, action);
    // assert
    expect(nextState).toEqual(action.payload.users);
  });
});
