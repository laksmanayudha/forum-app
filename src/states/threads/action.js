import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  SET_VOTE_THREAD: 'SET_VOTE_THREAD',
};

function receiveThreadsActionCreator(threads) {
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
      const thread = await api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncUpvoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(setVoteThread({ threadId, voteType: 1, userId: authUser.id }));
    try {
      await api.upvoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(setVoteThread({ threadId, voteType: 0, userId: authUser.id }));
    }
  };
}

function asyncDownvoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(setVoteThread({ threadId, voteType: -1, userId: authUser.id }));
    try {
      await api.downvoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(setVoteThread({ threadId, voteType: 0, userId: authUser.id }));
    }
  };
}

function asyncNeutralvoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser, threads } = getState();
    const selectedThread = threads.find((thread) => thread.id === threadId);
    const voteType = selectedThread.downVotesBy.includes(authUser.id) ? -1 : 1;
    dispatch(setVoteThread({ threadId, voteType: 0, userId: authUser.id }));
    try {
      await api.neutralvoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(setVoteThread({ threadId, voteType, userId: authUser.id }));
    }
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  setVoteThread,
  asyncAddThread,
  asyncUpvoteThread,
  asyncDownvoteThread,
  asyncNeutralvoteThread,
};
