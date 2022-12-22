const ActionType = {
  SET_THREAD_CATEGORY: 'SET_THREAD_CATEGORY',
};

function setThreadCategoryActionCreator(threadCategory) {
  return {
    type: ActionType.SET_THREAD_CATEGORY,
    payload: {
      threadCategory,
    },
  };
}

export {
  ActionType,
  setThreadCategoryActionCreator,
};
