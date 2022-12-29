const api = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1';

  function putAccessToken(token) {
    localStorage.setItem('accessToken', token);
  }

  function getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  async function fetchWithAuth(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }

  async function getJSONResponse(response, key) {
    const responseJson = await response.json();
    const { status, message } = responseJson;
    if (status !== 'success') throw new Error(message);
    return responseJson.data[key];
  }

  // Auth API
  async function register({ name, email, password }) {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    return getJSONResponse(response, 'user');
  }

  async function login({ email, password }) {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    return getJSONResponse(response, 'token');
  }

  // Users API
  async function getOwnProfile() {
    const response = await fetchWithAuth(`${BASE_URL}/users/me`);
    return getJSONResponse(response, 'user');
  }

  async function getAllUsers() {
    const response = await fetch(`${BASE_URL}/users`);
    return getJSONResponse(response, 'users');
  }

  // Threads API
  async function getAllThreads() {
    const response = await fetch(`${BASE_URL}/threads`);
    return getJSONResponse(response, 'threads');
  }

  async function getThreadDetail(id) {
    const response = await fetch(`${BASE_URL}/threads/${id}`);
    return getJSONResponse(response, 'detailThread');
  }

  async function createThread({ title, body, category = '' }) {
    const response = await fetchWithAuth(`${BASE_URL}/threads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        body,
        category,
      }),
    });
    return getJSONResponse(response, 'thread');
  }

  // Comments API
  async function createComment(threadId, content) {
    const response = await fetchWithAuth(`${BASE_URL}/threads/${threadId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    });
    return getJSONResponse(response, 'comment');
  }

  // Thread Vote API
  async function upvoteThread(threadId) {
    const response = await fetchWithAuth(`${BASE_URL}/threads/${threadId}/up-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return getJSONResponse(response, 'vote');
  }

  async function downvoteThread(threadId) {
    const response = await fetchWithAuth(`${BASE_URL}/threads/${threadId}/down-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return getJSONResponse(response, 'vote');
  }

  async function neutralvoteThread(threadId) {
    const response = await fetchWithAuth(`${BASE_URL}/threads/${threadId}/neutral-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return getJSONResponse(response, 'vote');
  }

  // Comment Vote API
  async function upvoteComment(threadId, commentId) {
    const response = await fetchWithAuth(`${BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return getJSONResponse(response, 'vote');
  }

  async function downvoteComment(threadId, commentId) {
    const response = await fetchWithAuth(`${BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return getJSONResponse(response, 'vote');
  }

  async function neutralvoteComment(threadId, commentId) {
    const response = await fetchWithAuth(`${BASE_URL}/threads/${threadId}/comments/${commentId}/neutral-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return getJSONResponse(response, 'vote');
  }

  // Leaderboards API
  async function getLeaderboards() {
    const response = await fetch(`${BASE_URL}/leaderboards`);
    return getJSONResponse(response, 'leaderboards');
  }

  return {
    putAccessToken,
    getAccessToken,
    register,
    login,
    getOwnProfile,
    getAllUsers,
    getAllThreads,
    getThreadDetail,
    createThread,
    createComment,
    upvoteThread,
    downvoteThread,
    neutralvoteThread,
    upvoteComment,
    downvoteComment,
    neutralvoteComment,
    getLeaderboards,
  };
})();

export default api;
