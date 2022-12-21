import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  SET_VOTE_THREAD: 'SET_VOTE_THREAD',
}

function receiveThreadActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function setVoteThread(vote) {
  return {
    type: ActionType.SET_VOTE_THREAD,
    payload: {
      vote,
    },
  };
}

function asyncAddThread({ title, body, category = '' }) {
  return async (dispatch) => {
    try {
      const thread = api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
  }
}

function asyncUpvoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(setVoteThread({ threadId, voteType: 1, userId: authUser.id, }))
    try {
      const vote = api.upvoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(setVoteThread({ threadId, voteType: -1, userId: authUser.id, }))
    }
  }
}
