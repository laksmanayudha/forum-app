import { ActionType } from './action';

function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.ADD_COMMENT:
      return {
        ...threadDetail,
        comments: [action.payload.comment, ...threadDetail.comments],
      };
    case ActionType.SET_VOTE_THREAD_DETAIL:
      if (action.payload.vote.voteType === 1) {
        return {
          ...threadDetail,
          upVotesBy: threadDetail.upVotesBy.push(action.payload.vote.userId),
        };
      }

      if (action.payload.vote.voteType === -1) {
        return {
          ...threadDetail,
          downVotesBy: threadDetail.downVotesBy.push(action.payload.vote.userId),
        };
      }

      if (action.payload.vote.voteType === 0) {
        return {
          ...threadDetail,
          upVotesBy: threadDetail.upVotesBy.filter((id) => id !== action.payload.vote.userId),
          downVotesBy: threadDetail.downVotesBy.filter((id) => id !== action.payload.vote.userId),
        };
      }
      return threadDetail;
    case ActionType.SET_VOTE_THREAD_DETAIL_COMMENT:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.vote.commentId) {
            if (action.payload.vote.voteType === 1) {
              return {
                ...comment,
                upVotesBy: comment.upVotesBy.push(action.payload.vote.userId),
              };
            }

            if (action.payload.vote.voteType === -1) {
              return {
                ...comment,
                downVotesBy: comment.downVotesBy.push(action.payload.vote.userId),
              };
            }

            if (action.payload.vote.voteType === 0) {
              return {
                ...comment,
                upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.vote.userId),
                downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.vote.userId),
              };
            }
          }
          return threadDetail.comments;
        }),
      };
    default:
      return threadDetail;
  }
}

export default threadDetailReducer;
