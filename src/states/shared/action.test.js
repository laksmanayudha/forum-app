/**
 * test scenario for asyncPopulateUsersThreadsCategories function
 *
 * should dispatch action correctly when data fetching success
 * should dispatch action and call alert correctly when data fetching failed
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveThreadCategoriesActionCreator } from '../threadCategories/action';
import { receiveThreadDetailActionCreator } from '../threadDetail/action';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';
import { asyncPopulateThreadDetailAndThreads, asyncPopulateUsersThreadsCategories } from './action';

const fakeThreadsResponse = [
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
    category: 'Introduction',
    createdAt: '2021-06-21T07:00:00.000Z',
    ownerId: 'users-2',
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0,
  },
];

const fakeUsersResponse = [
  {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
  {
    id: 'jane_doe',
    name: 'Jane Doe',
    email: 'jane@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
  {
    id: 'fulan',
    name: 'Si Fulan',
    email: 'fulan@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
];

const fakeThreadCategoriesResponse = fakeThreadsResponse.map((thread) => thread.category);
const fakeErrorResponse = new Error('something wrong');

describe('asyncPopulateUsersThreadsCategories thunk', () => {
  beforeEach(() => {
    api._getAllThreads = api.getAllThreads;
    api._getAllUsers = api.getAllUsers;
  });

  afterEach(() => {
    api.getAllThreads = api._getAllThreads;
    api.getAllUsers = api._getAllUsers;

    delete api._getAllThreads;
    delete api._getAllUsers;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub
    api.getAllThreads = () => Promise.resolve(fakeThreadsResponse);
    api.getAllUsers = () => Promise.resolve(fakeUsersResponse);
    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncPopulateUsersThreadsCategories()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(fakeThreadsResponse));
    expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsersResponse));
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadCategoriesActionCreator(fakeThreadCategoriesResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    api.getAllUsers = () => Promise.reject(fakeErrorResponse);
    api.getAllThreads = () => Promise.reject(fakeErrorResponse);
    // mock alert and dispatch
    const dispatch = jest.fn();
    window.alert = jest.fn();

    // action
    await asyncPopulateUsersThreadsCategories()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});

/**
 * test scenario for asyncPopulateThreadDetailAndThreads function
 *
 * should dispatch action correctly when data fetching success
 * should dispatch action and call alert correctly when data fetching failed
 */

const fakeThreadDetailResponse = {
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

describe('asyncPopulateThreadDetailAndThreads thunk', () => {
  beforeEach(() => {
    api._getAllThreads = api.getAllThreads;
    api._getThreadDetail = api.getThreadDetail;
  });

  afterEach(() => {
    api.getAllThreads = api._getAllThreads;
    api.getThreadDetail = api._getThreadDetail;

    delete api._getAllThreads;
    delete api._getThreadDetail;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub
    api.getAllThreads = () => Promise.resolve(fakeThreadsResponse);
    api.getThreadDetail = () => Promise.resolve(fakeThreadDetailResponse);
    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncPopulateThreadDetailAndThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(fakeThreadsResponse));
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadDetailActionCreator(fakeThreadDetailResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    api.getThreadDetail = () => Promise.reject(fakeErrorResponse);
    api.getAllThreads = () => Promise.reject(fakeErrorResponse);
    // mock alert and dispatch
    const dispatch = jest.fn();
    window.alert = jest.fn();

    // action
    await asyncPopulateThreadDetailAndThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
