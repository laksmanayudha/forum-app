/* eslint-disable max-len */
/**
 * test scenario for threadCategoryReducer function
 *
 * should return initial state when given by unknown action
 * should return thread category with new selected category if not exist and remove it if exists when given by SET_THREAD_CATEGORY action
 */

import threadCategoryReducer from './reducer';

describe('threadCategoryReducer function', () => {
  it('should return initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const unknownAction = { type: 'UNKNOWN_ACTION' };
    // action
    const nextState = threadCategoryReducer(initialState, unknownAction);
    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return thread category with new selected category if not exist and remove it if exists when given by SET_THREAD_CATEGORY action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'SET_THREAD_CATEGORY',
      payload: {
        threadCategory: 'test-category',
      },
    };
    // action: add category
    const nextState = threadCategoryReducer(initialState, action);
    // assert
    expect(nextState).toEqual([action.payload.threadCategory]);

    // action: remove category
    const secondNextState = threadCategoryReducer(nextState, action);
    // assert
    expect(secondNextState).toEqual(initialState);
  });
});
