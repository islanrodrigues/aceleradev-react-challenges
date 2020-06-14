const BASE_URL = '	https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories';

export const getStories = () => {
  return fetch(BASE_URL)
    .then(response => response.json()
      .then(data => data));
}

export const getStoryById = (storyId) => {
  return fetch(`${BASE_URL}/${storyId}`)
    .then(response => response.json()
      .then(data => data));
}