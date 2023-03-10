import { hideLoading, showLoading } from 'react-redux-loading-bar';
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
    dispatch(showLoading());
    try {
      const thread = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpvoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(setVoteThreadDetailActionCreator({ threadId, voteType: 1, userId: authUser.id }));
    try {
      await api.upvoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(setVoteThreadDetailActionCreator({ threadId, voteType: 0, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

function asyncDownvoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(setVoteThreadDetailActionCreator({ threadId, voteType: -1, userId: authUser.id }));
    try {
      await api.downvoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(setVoteThreadDetailActionCreator({ threadId, voteType: 0, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralvoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    const voteType = threadDetail.downVotesBy.includes(authUser.id) ? -1 : 1;
    dispatch(setVoteThreadDetailActionCreator({ threadId, voteType: 0, userId: authUser.id }));
    try {
      await api.neutralvoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(setVoteThreadDetailActionCreator({ threadId, voteType, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

function asyncAddComment(threadId, content) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const comment = await api.createComment(threadId, content);
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpvoteComment(threadId, commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(setVoteThreadDetailCommentActionCreator({
      commentId,
      threadId,
      voteType: 1,
      userId: authUser.id,
    }));
    try {
      await api.upvoteComment(threadId, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(setVoteThreadDetailCommentActionCreator({
        commentId,
        threadId,
        voteType: 0,
        userId: authUser.id,
      }));
    }
    dispatch(hideLoading());
  };
}

function asyncDownvoteComment(threadId, commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(setVoteThreadDetailCommentActionCreator({
      commentId,
      threadId,
      voteType: -1,
      userId: authUser.id,
    }));
    try {
      await api.downvoteComment(threadId, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(setVoteThreadDetailCommentActionCreator({
        commentId,
        threadId,
        voteType: 0,
        userId: authUser.id,
      }));
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralvoteComment(threadId, commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    const selectedComment = threadDetail.comments.find((comment) => comment.id === commentId);
    const voteType = selectedComment.downVotesBy.includes(authUser.id) ? -1 : 1;
    dispatch(setVoteThreadDetailCommentActionCreator({
      commentId,
      threadId,
      voteType: 0,
      userId: authUser.id,
    }));
    try {
      await api.neutralvoteComment(threadId, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(setVoteThreadDetailCommentActionCreator({
        commentId,
        threadId,
        voteType,
        userId: authUser.id,
      }));
    }
    dispatch(hideLoading());
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
