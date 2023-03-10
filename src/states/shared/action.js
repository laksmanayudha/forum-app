import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';
import { receiveThreadCategoriesActionCreator } from '../threadCategories/action';
import { receiveThreadDetailActionCreator } from '../threadDetail/action';

function asyncPopulateUsersThreadsCategories() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();
      const threadCategories = [...new Set(threads.map((thread) => thread.category))];
      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
      dispatch(receiveThreadCategoriesActionCreator(threadCategories));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncPopulateThreadDetailAndThreads(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const threads = await api.getAllThreads();
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadsActionCreator(threads));
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  asyncPopulateUsersThreadsCategories,
  asyncPopulateThreadDetailAndThreads,
};
