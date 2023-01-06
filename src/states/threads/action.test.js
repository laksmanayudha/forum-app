/**
 * test scenario for asyncAddThread function
 *
 * should dispatch action correctly when data sending success
 * should dispatch action and call alert correctly when data sending failed
 */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import {
  addThreadActionCreator,
  asyncAddThread, asyncUpvoteThread,
  setVoteThreadActionCreator,
} from './action';

const fakeThreadResponse = {
  id: 'thread-1',
  title: 'Thread Pertama',
  body: 'Ini adalah thread pertama',
  category: 'General',
  createdAt: '2021-06-21T07:00:00.000Z',
  ownerId: 'users-1',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0,
};

const fakeErrorResponse = new Error('something wrong');

describe('asyncAddThread thunk', () => {
  beforeEach(() => {
    api._createThread = api.createThread;
  });

  afterEach(() => {
    api.createThread = api._createThread;
    delete api._createThread;
  });

  it('should dispatch action correctly when data sending success', async () => {
    // arrange
    // stub
    api.createThread = () => Promise.resolve(fakeThreadResponse);
    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncAddThread({ })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(addThreadActionCreator(fakeThreadResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data sending failed', async () => {
    // arrange
    api.createThread = () => Promise.reject(fakeErrorResponse);
    // mock alert and dispatch
    const dispatch = jest.fn();
    window.alert = jest.fn();

    // action
    await asyncAddThread({ })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});

/**
 * test scenario for asyncUpvoteThread function
 *
 * should dispatch action correctly when data sending success
 * should dispatch action and call alert correctly when data sending failed
 */
const fakeAuthUser = {
  authUser: {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
};

const fakeUpvoteResponse = {
  id: 'vote-1',
  threadId: 'testId',
  voteType: 1,
  userId: fakeAuthUser.authUser.id,
};

// const fakeDownvoteResponse = {
//   id: 'vote-1',
//   threadId: 'testId',
//   voteType: -1,
//   userId: fakeAuthUser.authUser.id,
// };

const fakeNeutralvoteResponse = {
  id: 'vote-1',
  threadId: 'testId',
  voteType: 0,
  userId: fakeAuthUser.authUser.id,
};

describe('asyncUpvoteThread thunk', () => {
  beforeEach(() => {
    api._upvoteThread = api.upvoteThread;
  });

  afterEach(() => {
    api.upvoteThread = api._upvoteThread;
    delete api._upvoteThread;
  });

  it('should dispatch action correctly when data sending success', async () => {
    // arrange
    const { threadId, voteType, userId } = fakeUpvoteResponse;
    // stub
    api.upvoteThread = () => Promise.resolve(fakeUpvoteResponse);
    const getState = () => fakeAuthUser;
    // mock dispatch dan getState
    const dispatch = jest.fn();

    // action
    await asyncUpvoteThread(fakeUpvoteResponse.threadId)(dispatch, getState);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      setVoteThreadActionCreator({ threadId, voteType, userId }),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data sending failed', async () => {
    // arrange
    const { threadId, voteType, userId } = fakeUpvoteResponse;
    // stub
    api.upvoteThread = () => Promise.reject(fakeErrorResponse);
    const getState = () => fakeAuthUser;
    // mock alert and dispatch
    const dispatch = jest.fn();
    window.alert = jest.fn();

    // action
    await asyncUpvoteThread(fakeUpvoteResponse.threadId)(dispatch, getState);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      setVoteThreadActionCreator({ threadId, voteType, userId }),
    );
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    expect(dispatch).toHaveBeenCalledWith(
      setVoteThreadActionCreator({ threadId, voteType: fakeNeutralvoteResponse.voteType, userId }),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
