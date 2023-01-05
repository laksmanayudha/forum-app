/**
 * test scenario for threadCategoriesReducer function
 *
 * should return initial state when given by unknown action
 * should return thread categories when given by RECEIVE_CATEGORIES action
 */

import threadCategoriesReducer from './reducer';

describe('threadCategoriesReducer function', () => {
  it('should return initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const unknownAction = { type: 'UNKNOWN_ACTION' };
    // action
    const nextState = threadCategoriesReducer(initialState, unknownAction);
    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return thread categories when given by RECEIVE_CATEGORIES action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_CATEGORIES',
      payload: {
        threadCategories: ['introduction', 'react'],
      },
    };
    // action
    const nextState = threadCategoriesReducer(initialState, action);
    // assert
    expect(nextState).toEqual(action.payload.threadCategories);
  });
});
