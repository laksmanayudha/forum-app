import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ name, email, password }) {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      await api.register({ name, email, password });
    } catch (error) {
      alert(error.message);
      dispatch(hideLoading());
      return { error: true };
    }
    dispatch(hideLoading());
    return { error: false };
  };
}

export {
  ActionType,
  receiveUsersActionCreator,
  asyncRegisterUser,
};
