import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  SET_VOTE_THREAD_DETAIL: 'SET_VOTE_THREAD_DETAIL',
  ADD_COMMENT: 'ADD_COMMENT',
  SET_VOTE_THREAD_DETAIL_COMMENT: 'SET_VOTE_THREAD_DETAIL_COMMENT',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function setVoteThreadDetailActionCreator(vote) {
  return {
    type: ActionType.SET_VOTE_THREAD_DETAIL,
    payload: {
      vote,
    },
  };
}

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

function setVoteThreadDetailCommentActionCreator(vote) {
  return {
    type: ActionType.SET_VOTE_THREAD_DETAIL_COMMENT,
    payload: {
      vote,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    try {
      const thread = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncUpvoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(setVoteThreadDetailActionCreator({ threadId, voteType: 1, userId: authUser.id }));
    try {
      await api.upvoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(setVoteThreadDetailActionCreator({ threadId, voteType: 0, userId: authUser.id }));
    }
  };
}

function asyncDownvoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(setVoteThreadDetailActionCreator({ threadId, voteType: 1, userId: authUser.id }));
    try {
      await api.downvoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(setVoteThreadDetailActionCreator({ threadId, voteType: 0, userId: authUser.id }));
    }
  };
}

function asyncNeutralvoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    const voteType = threadDetail.downVotesBy.includes(authUser.id) ? -1 : 1;
    dispatch(setVoteThreadDetailActionCreator({ threadId, voteType: 0, userId: authUser.id }));
    try {
      await api.neutralvoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(setVoteThreadDetailActionCreator({ threadId, voteType, userId: authUser.id }));
    }
  };
}

function asyncAddComment(threadId, content) {
  return async (dispatch) => {
    try {
      const comment = await api.createComment(threadId, content);
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncUpvoteComment(threadId, commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(setVoteThreadDetailCommentActionCreator({
      threadId,
      voteType: 1,
      userId: authUser.id,
    }));
    try {
      await api.upvoteComment(threadId, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(setVoteThreadDetailCommentActionCreator({
        threadId,
        voteType: 0,
        userId: authUser.id,
      }));
    }
  };
}

function asyncDownvoteComment(threadId, commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(setVoteThreadDetailCommentActionCreator({
      threadId,
      voteType: -1,
      userId: authUser.id,
    }));
    try {
      await api.downvoteComment(threadId, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(setVoteThreadDetailCommentActionCreator({
        threadId,
        voteType: 0,
        userId: authUser.id,
      }));
    }
  };
}

function asyncNeutralvoteComment(threadId, commentId) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    const selectedComment = threadDetail.comments.find((comment) => comment.id === commentId);
    const voteType = selectedComment.downVotesBy.includes(authUser.id) ? -1 : 1;
    dispatch(setVoteThreadDetailCommentActionCreator({
      threadId,
      voteType: 0,
      userId: authUser.id,
    }));
    try {
      await api.neutralvoteComment(threadId, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(setVoteThreadDetailCommentActionCreator({
        threadId,
        voteType,
        userId: authUser.id,
      }));
    }
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  setVoteThreadDetailActionCreator,
  addCommentActionCreator,
  setVoteThreadDetailCommentActionCreator,
  asyncReceiveThreadDetail,
  asyncUpvoteThreadDetail,
  asyncDownvoteThreadDetail,
  asyncNeutralvoteThreadDetail,
  asyncAddComment,
  asyncUpvoteComment,
  asyncDownvoteComment,
  asyncNeutralvoteComment,
};
