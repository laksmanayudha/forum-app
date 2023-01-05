/* eslint-disable max-len */
/**
 * test scenario for threadDetailReducer
 *
 * should return initial state if unknown action given
 * should return the given thread detail by RECEIVE_THREAD_DETAIL action
 * should return thread detail with new comment by ADD_COMMENT action
 * should return thread detail with up/down/neutral vote when given by SET_VOTE_THREAD_DETAIL action
 * should return thread detail with up/down/neutral voted comment when given by SET_VOTE_THREAD_DETAIL_COMMENT action
 */

import threadDetailReducer from './reducer';

describe('threadDetailReducer function', () => {
  it('should return initial state if unknown action given', () => {
    // arrange
    const initialState = null;
    const unknownAction = { type: 'UNKNOWN_ACTION' };
    // action
    const nextState = threadDetailReducer(initialState, unknownAction);
    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the given thread detail by RECEIVE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = null;
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        threadDetail: {
          id: 'thread-test-1',
          title: 'Thread Test Pertama',
          body: 'Ini adalah thread test pertama',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
          comments: [
            {
              id: 'comment-1',
              content: 'Ini adalah komentar pertama',
              createdAt: '2021-06-21T07:00:00.000Z',
              owner: {
                id: 'users-1',
                name: 'John Doe',
                avatar: 'https://generated-image-url.jpg',
              },
              upVotesBy: [],
              downVotesBy: [],
            },
          ],
        },
      },
    };
    // action
    const nextState = threadDetailReducer(initialState, action);
    // assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it('should return thread detail with new comment by ADD_COMMENT action', () => {
    // arrange
    const initialState = {
      id: 'thread-test-1',
      title: 'Thread Test Pertama',
      body: 'Ini adalah thread test pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: 'ADD_COMMENT',
      payload: {
        comment: {
          id: 'comment-test-1',
          content: 'Ini adalah komentar test pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          upVotesBy: [],
          downVotesBy: [],
          owner: {
            id: 'users-1',
            name: 'John Doe',
            email: 'john@example.com',
          },
        },
      },
    };
    // action
    const nextState = threadDetailReducer(initialState, action);
    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [action.payload.comment, ...initialState.comments],
    });
  });

  it('should return thread detail with up/down/neutral vote when given by SET_VOTE_THREAD_DETAIL action', () => {
    // arrange
    const votedUserId = 'users-voted';
    const initialState = {
      id: 'thread-test-1',
      title: 'Thread Test Pertama',
      body: 'Ini adalah thread test pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: ['dummy-user'],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const upvoteAction = {
      type: 'SET_VOTE_THREAD_DETAIL',
      payload: {
        vote: {
          id: 'vote-test-1',
          userId: votedUserId,
          threadId: initialState.id,
          voteType: 1,
        },
      },
    };
    const downvoteAction = {
      type: 'SET_VOTE_THREAD_DETAIL',
      payload: {
        vote: {
          id: 'vote-test-1',
          userId: votedUserId,
          threadId: initialState.id,
          voteType: -1,
        },
      },
    };
    const neutralvoteAction = {
      type: 'SET_VOTE_THREAD_DETAIL',
      payload: {
        vote: {
          id: 'vote-test-1',
          userId: votedUserId,
          threadId: initialState.id,
          voteType: 0,
        },
      },
    };
    // action: up-vote thread from neutral-vote
    const nextState = threadDetailReducer(initialState, upvoteAction);
    // assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: ['dummy-user', upvoteAction.payload.vote.userId],
      downVotesBy: [],
    });

    // action: neutral-vote thread from up-vote
    const secondNextState = threadDetailReducer(nextState, neutralvoteAction);
    // assert
    expect(secondNextState).toEqual({
      ...nextState,
      upVotesBy: ['dummy-user'],
      downVotesBy: [],
    });

    // action: down-vote thread from neutral-vote
    const thirdNextState = threadDetailReducer(secondNextState, downvoteAction);
    // assert
    expect(thirdNextState).toEqual({
      ...secondNextState,
      upVotesBy: ['dummy-user'],
      downVotesBy: [downvoteAction.payload.vote.userId],
    });

    // action: try down-vote again after down-vote the thread
    const fourthNextState = threadDetailReducer(thirdNextState, downvoteAction);
    // assert: expect to nothing changed
    expect(fourthNextState).toEqual({
      ...thirdNextState,
      upVotesBy: ['dummy-user'],
      downVotesBy: [downvoteAction.payload.vote.userId],
    });

    // action: up-vote thread from down-vote
    const fifthNextState = threadDetailReducer(fourthNextState, upvoteAction);
    // assert
    expect(fifthNextState).toEqual({
      ...fourthNextState,
      upVotesBy: ['dummy-user', upvoteAction.payload.vote.userId],
      downVotesBy: [],
    });

    // action: up-vote thread again from up-vote
    const sixthNextState = threadDetailReducer(fifthNextState, upvoteAction);
    // assert: expect to nothing changed
    expect(sixthNextState).toEqual({
      ...fifthNextState,
      upVotesBy: ['dummy-user', upvoteAction.payload.vote.userId],
      downVotesBy: [],
    });

    // action: down-vote thread from up-vote
    const seventhNextState = threadDetailReducer(sixthNextState, downvoteAction);
    // assert
    expect(seventhNextState).toEqual({
      ...sixthNextState,
      upVotesBy: ['dummy-user'],
      downVotesBy: [downvoteAction.payload.vote.userId],
    });

    // action: neutral-vote thread from down-vote
    const eighthNextState = threadDetailReducer(seventhNextState, neutralvoteAction);
    // assert
    expect(eighthNextState).toEqual({
      ...seventhNextState,
      upVotesBy: ['dummy-user'],
      downVotesBy: [],
    });
  });

  it('should return thread detail with up/down/neutral voted comment when given by SET_VOTE_THREAD_DETAIL_COMMENT action', () => {
    // arrange
    const votedUserId = 'users-voted';
    const initialState = {
      id: 'thread-test-1',
      title: 'Thread Test Pertama',
      body: 'Ini adalah thread test pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: ['dummy-user'],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: ['dummy-user'],
          downVotesBy: [],
        },
      ],
    };
    const upvoteAction = {
      type: 'SET_VOTE_THREAD_DETAIL_COMMENT',
      payload: {
        vote: {
          id: 'vote-test-1',
          userId: votedUserId,
          commentId: initialState.comments[0].id,
          voteType: 1,
        },
      },
    };
    const downvoteAction = {
      type: 'SET_VOTE_THREAD_DETAIL_COMMENT',
      payload: {
        vote: {
          id: 'vote-test-1',
          userId: votedUserId,
          commentId: initialState.comments[0].id,
          voteType: -1,
        },
      },
    };
    const neutralvoteAction = {
      type: 'SET_VOTE_THREAD_DETAIL_COMMENT',
      payload: {
        vote: {
          id: 'vote-test-1',
          userId: votedUserId,
          commentId: initialState.comments[0].id,
          voteType: 0,
        },
      },
    };
    // action: up-vote comment from neutral-vote
    const nextState = threadDetailReducer(initialState, upvoteAction);
    // assert
    expect(nextState.comments[0]).toEqual({
      ...nextState.comments[0],
      upVotesBy: ['dummy-user', upvoteAction.payload.vote.userId],
      downVotesBy: [],
    });

    // action: neutral-vote comment from up-vote
    const secondNextState = threadDetailReducer(nextState, neutralvoteAction);
    // assert
    expect(secondNextState.comments[0]).toEqual({
      ...nextState.comments[0],
      upVotesBy: ['dummy-user'],
      downVotesBy: [],
    });

    // action: down-vote comment from neutral-vote
    const thirdNextState = threadDetailReducer(secondNextState, downvoteAction);
    // assert
    expect(thirdNextState.comments[0]).toEqual({
      ...secondNextState.comments[0],
      upVotesBy: ['dummy-user'],
      downVotesBy: [downvoteAction.payload.vote.userId],
    });

    // action: try down-vote again after down-vote the comment
    const fourthNextState = threadDetailReducer(thirdNextState, downvoteAction);
    // assert: expect to nothing changed
    expect(fourthNextState.comments[0]).toEqual({
      ...thirdNextState.comments[0],
      upVotesBy: ['dummy-user'],
      downVotesBy: [downvoteAction.payload.vote.userId],
    });

    // action: up-vote comment from down-vote
    const fifthNextState = threadDetailReducer(fourthNextState, upvoteAction);
    // assert
    expect(fifthNextState.comments[0]).toEqual({
      ...fourthNextState.comments[0],
      upVotesBy: ['dummy-user', upvoteAction.payload.vote.userId],
      downVotesBy: [],
    });

    // action: up-vote comment again from up-vote
    const sixthNextState = threadDetailReducer(fifthNextState, upvoteAction);
    // assert: expect to nothing changed
    expect(sixthNextState.comments[0]).toEqual({
      ...fifthNextState.comments[0],
      upVotesBy: ['dummy-user', upvoteAction.payload.vote.userId],
      downVotesBy: [],
    });

    // action: down-vote comment from up-vote
    const seventhNextState = threadDetailReducer(sixthNextState, downvoteAction);
    // assert
    expect(seventhNextState.comments[0]).toEqual({
      ...sixthNextState.comments[0],
      upVotesBy: ['dummy-user'],
      downVotesBy: [downvoteAction.payload.vote.userId],
    });

    // action: neutral-vote comment from down-vote
    const eighthNextState = threadDetailReducer(seventhNextState, neutralvoteAction);
    // assert
    expect(eighthNextState.comments[0]).toEqual({
      ...seventhNextState.comments[0],
      upVotesBy: ['dummy-user'],
      downVotesBy: [],
    });
  });
});
