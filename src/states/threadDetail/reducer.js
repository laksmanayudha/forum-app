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
          upVotesBy: !threadDetail.upVotesBy.includes(action.payload.vote.userId)
            ? [...threadDetail.upVotesBy, action.payload.vote.userId] : [...threadDetail.upVotesBy],
          downVotesBy: threadDetail.downVotesBy.filter((id) => id !== action.payload.vote.userId),
        };
      }

      if (action.payload.vote.voteType === -1) {
        return {
          ...threadDetail,
          upVotesBy: threadDetail.upVotesBy.filter((id) => id !== action.payload.vote.userId),
          downVotesBy: !threadDetail.downVotesBy.includes(action.payload.vote.userId)
            ? [...threadDetail.downVotesBy, action.payload.vote.userId]
            : [...threadDetail.downVotesBy],
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
                upVotesBy: [...comment.upVotesBy, action.payload.vote.userId],
                downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.vote.userId),
              };
            }

            if (action.payload.vote.voteType === -1) {
              return {
                ...comment,
                upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.vote.userId),
                downVotesBy: [...comment.downVotesBy, action.payload.vote.userId],
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
