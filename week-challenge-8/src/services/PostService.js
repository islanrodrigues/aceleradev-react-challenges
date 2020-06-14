const BASE_URL = 'https://5e7d0266a917d70016684219.mockapi.io/api/v1/users';

export const getPosts = (userId) => {
  return fetch(`${BASE_URL}/${userId}/posts`)
    .then(response => response.json()
      .then(data => data));
}

export const getPostById = (userId, postId) => {
  return fetch(`${BASE_URL}/${userId}/posts/${postId}`)
    .then(response => response.json()
      .then(data => data));
}

