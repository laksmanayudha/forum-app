/**
 * test scenario for isPreloadReducer function
 *
 * should return initial state when unknown action given
 * should return isPreload value given by SET_IS_PRELOAD action
 */

import isPreloadReducer from './reducer';

describe('isPreloadReducer function', () => {
  it('should return initial state when unknown action given', () => {
    // arrange
    const initialState = true;
    const unknownAction = { type: 'UNKNOWN_ACTION' };
    // action
    const nextState = isPreloadReducer(initialState, unknownAction);
    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return isPreload value given by SET_IS_PRELOAD action', () => {
    // arrange
    const initialState = true;
    const action = {
      type: 'SET_IS_PRELOAD',
      payload: {
        isPreload: false,
      },
    };
    // action
    const nextState = isPreloadReducer(initialState, action);
    // assert
    expect(nextState).toEqual(action.payload.isPreload);
  });
});
