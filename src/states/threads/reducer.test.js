/**
 * test scenario for threadsReducer
 *
 * should return initial state if unknown action given
 * should return the given threads by RECEIVE_THREADS action
 * should return threads with new thread given by ADD_THREAD action
 * should return threads with up-vote when given vote type equal to 1 by SET_VOTE_THREAD action
 * should return threads with down-vote when given vote type equal to -1 by SET_VOTE_THREAD action
 * should return threads with neutral-vote when given vote type equal to 0 by SET_VOTE_THREAD action
*/
import threadsReducer from './reducer';

describe('threadsReducer function', () => {
  it('should return initial state if unknown action given', () => {
    // arrange
    const unknownAction = { type: 'UNKNOWN_ACTION' };
    const initialState = [];
    // action
    const nextState = threadsReducer(initialState, unknownAction);
    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the given threads by RECEIVE_THREADS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            id: 'thread-test-1',
            title: 'Thread Test Pertama',
            body: 'Ini adalah thread pertama',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-1',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
          {
            id: 'thread-test-2',
            title: 'Thread Test Kedua',
            body: 'Ini adalah thread kedua',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-2',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
        ],
      },
    };
    // action
    const nextState = threadsReducer(initialState, action);
    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return threads with new thread given by ADD_THREAD action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread: {
          id: 'thread-test-1',
          title: 'Thread Test Pertama',
          body: 'Ini adalah thread pertama',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          ownerId: 'users-1',
          upVotesBy: [],
          downVotesBy: [],
          totalComments: 0,
        },
      },
    };
    const secondAction = {
      type: 'ADD_THREAD',
      payload: {
        thread: {
          id: 'thread-test-2',
          title: 'Thread Test Kedua',
          body: 'Ini adalah thread pertama',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          ownerId: 'users-1',
          upVotesBy: [],
          downVotesBy: [],
          totalComments: 0,
        },
      },
    };
    // action: add first thread
    const nextState = threadsReducer(initialState, action);
    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);

    // action: add second thread
    const secondNextState = threadsReducer(nextState, secondAction);
    // assert
    expect(secondNextState).toEqual([secondAction.payload.thread, ...nextState]);
  });

  it('should return threads with up-vote when given vote type equal to 1 by SET_VOTE_THREAD action', () => {
    // arrange
    const votedUserId = 'users-voted';
    const initialState = [
      {
        id: 'thread-test-1',
        title: 'Thread Test Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: ['dummy-user'],
        downVotesBy: [],
        totalComments: 0,
      },
      {
        id: 'thread-test-2',
        title: 'Thread Test Kedua',
        body: 'Ini adalah thread kedua',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-2',
        upVotesBy: [],
        downVotesBy: [votedUserId],
        totalComments: 0,
      },
    ];
    const action = {
      type: 'SET_VOTE_THREAD',
      payload: {
        vote: {
          id: 'vote-test-1',
          userId: votedUserId,
          threadId: initialState[0].id,
          voteType: 1,
        },
      },
    };
    const secondAction = {
      type: 'SET_VOTE_THREAD',
      payload: {
        vote: {
          id: 'vote-test-2',
          userId: votedUserId,
          threadId: initialState[1].id,
          voteType: 1,
        },
      },
    };
    // action: up-vote for users who haven't voted the thread
    let nextState = threadsReducer(initialState, action);
    // assert
    expect(nextState[0].upVotesBy).toEqual(['dummy-user', action.payload.vote.userId]);
    expect(nextState[0].downVotesBy).toEqual(initialState[0].downVotesBy);

    // action: up-vote for users already down-vote the thread
    nextState = threadsReducer(initialState, secondAction);
    // assert
    expect(nextState[1].upVotesBy).toEqual([secondAction.payload.vote.userId]);
    expect(nextState[1].downVotesBy).toEqual([]);
  });

  it('should return threads with down-vote when given vote type equal to -1 by SET_VOTE_THREAD action', () => {
    // arrange
    const votedUserId = 'users-voted';
    const initialState = [
      {
        id: 'thread-test-1',
        title: 'Thread Test Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: ['dummy-user'],
        totalComments: 0,
      },
      {
        id: 'thread-test-2',
        title: 'Thread Test Kedua',
        body: 'Ini adalah thread kedua',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-2',
        upVotesBy: [votedUserId],
        downVotesBy: [],
        totalComments: 0,
      },
    ];
    const action = {
      type: 'SET_VOTE_THREAD',
      payload: {
        vote: {
          id: 'vote-test-1',
          userId: votedUserId,
          threadId: initialState[0].id,
          voteType: -1,
        },
      },
    };
    const secondAction = {
      type: 'SET_VOTE_THREAD',
      payload: {
        vote: {
          id: 'vote-test-2',
          userId: votedUserId,
          threadId: initialState[1].id,
          voteType: -1,
        },
      },
    };
    // action: down-vote for users who haven't voted the thread
    let nextState = threadsReducer(initialState, action);
    // assert
    expect(nextState[0].upVotesBy).toEqual(initialState[0].upVotesBy);
    expect(nextState[0].downVotesBy).toEqual(['dummy-user', action.payload.vote.userId]);

    // action: dwon-vote for users already up-vote the thread
    nextState = threadsReducer(initialState, secondAction);
    // assert
    expect(nextState[1].upVotesBy).toEqual([]);
    expect(nextState[1].downVotesBy).toEqual([secondAction.payload.vote.userId]);
  });

  it('should return threads with neutral-vote when given vote type equal to 0 by SET_VOTE_THREAD action', () => {
    // arrange
    const votedUserId = 'users-voted';
    const initialState = [
      {
        id: 'thread-test-1',
        title: 'Thread Test Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: ['dummy-user'],
        downVotesBy: [votedUserId],
        totalComments: 0,
      },
      {
        id: 'thread-test-2',
        title: 'Thread Test Kedua',
        body: 'Ini adalah thread kedua',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-2',
        upVotesBy: [votedUserId],
        downVotesBy: ['dummy-user'],
        totalComments: 0,
      },
    ];
    const action = {
      type: 'SET_VOTE_THREAD',
      payload: {
        vote: {
          id: 'vote-test-1',
          userId: votedUserId,
          threadId: initialState[0].id,
          voteType: 0,
        },
      },
    };
    const secondAction = {
      type: 'SET_VOTE_THREAD',
      payload: {
        vote: {
          id: 'vote-test-2',
          userId: votedUserId,
          threadId: initialState[1].id,
          voteType: 0,
        },
      },
    };
    // action: neutral-vote for users already down-vote the thread
    let nextState = threadsReducer(initialState, action);
    // assert
    expect(nextState[0].upVotesBy).toEqual(initialState[0].upVotesBy);
    expect(nextState[0].downVotesBy).toEqual([]);

    // action: neutral-vote for users already up-vote the thread
    nextState = threadsReducer(initialState, secondAction);
    // assert
    expect(nextState[1].upVotesBy).toEqual([]);
    expect(nextState[1].downVotesBy).toEqual(initialState[1].downVotesBy);
  });
});
