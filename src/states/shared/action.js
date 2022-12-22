import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';
import { receiveThreadCategoriesActionCreator } from '../threadCategories/action';

function asyncPopulateUsersThreadsCategories() {
  return async (dispatch) => {
    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();
      const threadCategories = threads.map((thread) => thread.category);
      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
      dispatch(receiveThreadCategoriesActionCreator(threadCategories));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncPopulateUserDetailAndThreads() {
  return async () => {

  };
}

export {
  asyncPopulateUsersThreadsCategories,
  asyncPopulateUserDetailAndThreads,
};
