import { ActionType } from './action';

function threadCatogryReducer(threadCategory = [], action = {}) {
  switch (action.type) {
    case ActionType.SET_THREAD_CATEGORY:
      return [...threadCategory, action.payload.threadCategory];
    default:
      return threadCategory;
  }
}

export default threadCatogryReducer;
