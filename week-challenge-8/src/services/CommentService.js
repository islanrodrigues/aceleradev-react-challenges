const BASE_URL = '	https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/';

export const getComments = (userId, postId) => {
  return fetch(`${BASE_URL}/${userId}/posts/${postId}/comments`)
    .then(response => response.json()
      .then(data => data));
}

export const getCommentsById = (userId, postId, commentId) => {
  return fetch(`${BASE_URL}/${userId}/posts/${postId}/comments/${commentId}`)
    .then(response => response.json()
      .then(data => data));
}