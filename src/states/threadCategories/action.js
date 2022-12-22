const ActionType = {
  RECEIVE_CATEGORIES: 'RECEIVE_CATEGORIES',
};

function receiveThreadCategoriesActionCreator(threadCategories) {
  return {
    type: ActionType.RECEIVE_CATEGORIES,
    payload: {
      threadCategories,
    },
  };
}

export {
  ActionType,
  receiveThreadCategoriesActionCreator,
};
