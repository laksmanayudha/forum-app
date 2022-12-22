import { ActionType } from './action';

function threadCatogryReducer(threadCateogry = [], action = {}) {
  switch (action.type) {
    case ActionType.SET_THREAD_CATEGORY:
      return [...threadCateogry, action.payload.threadCategory];
    default:
      return threadCateogry;
  }
}

export default threadCatogryReducer;
