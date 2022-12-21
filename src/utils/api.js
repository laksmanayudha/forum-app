const api = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1';
  function putAccessToken(token) {
    localStorage.setItem('accessToken', token);
  }

  function getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  return {
    putAccessToken,
    getAccessToken,
  };
})();

export default api;
