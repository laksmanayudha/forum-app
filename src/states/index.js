import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import leaderboardsReducer from './leaderboards/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';
import threadDetailReducer from './threadDetail/reducer';
import threadCategoriesReducer from './threadCategories/reducer';
import threadCategoryReducer from './threadCategory/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    leaderboards: leaderboardsReducer,
    threadCategories: threadCategoriesReducer,
    threadCategory: threadCategoryReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
