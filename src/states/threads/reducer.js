import { ActionType } from './action';

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;
    case ActionType.ADD_THREAD:
      return [action.payload.thread, ...threads];
    case ActionType.SET_VOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.vote.threadId) {
          if (action.payload.vote.voteType === 1) {
            return {
              ...thread,
              upVotesBy: !thread.upVotesBy.includes(action.payload.vote.userId)
                ? [...thread.upVotesBy, action.payload.vote.userId] : [...thread.upVotesBy],
              downVotesBy: thread.downVotesBy.filter((id) => id !== action.payload.vote.userId),
            };
          }

          if (action.payload.vote.voteType === -1) {
            return {
              ...thread,
              upVotesBy: thread.upVotesBy.filter((id) => id !== action.payload.vote.userId),
              downVotesBy: !thread.downVotesBy.includes(action.payload.vote.userId)
                ? [...thread.downVotesBy, action.payload.vote.userId] : [...thread.downVotesBy],
            };
          }

          if (action.payload.vote.voteType === 0) {
            return {
              ...thread,
              upVotesBy: thread.upVotesBy.filter((id) => id !== action.payload.vote.userId),
              downVotesBy: thread.downVotesBy.filter((id) => id !== action.payload.vote.userId),
            };
          }
        }
        return thread;
      });
    default:
      return threads;
  }
}

export default threadsReducer;
