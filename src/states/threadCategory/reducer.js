import { ActionType } from './action';

function threadCategoryReducer(threadCategory = [], action = {}) {
  switch (action.type) {
    case ActionType.SET_THREAD_CATEGORY:
      if (threadCategory.includes(action.payload.threadCategory)) {
        return threadCategory.filter((category) => category !== action.payload.threadCategory);
      }
      return [...threadCategory, action.payload.threadCategory];
    default:
      return threadCategory;
  }
}

export default threadCategoryReducer;
