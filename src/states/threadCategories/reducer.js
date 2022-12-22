import { ActionType } from './action';

function threadCategoriesReducer(threadCategories = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_CATEGORIES:
      return action.payload.threadCategories;
    default:
      return threadCategories;
  }
}

export default threadCategoriesReducer;
