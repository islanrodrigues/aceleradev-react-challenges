const BASE_URL = '	https://5e7d0266a917d70016684219.mockapi.io/api/v1/users'

export const getUsers = () => {
  return fetch(BASE_URL)
    .then(response => response.json()
      .then(data => data)
    );
}

export const getUserById = (userId) => {
  return fetch(`${BASE_URL}/${userId}`)
    .then(response => response.json()
      .then(data => data)
    );
}

export const getUserByUsername = (username) => {
  return fetch(`${BASE_URL}/?search=${username}`)
    .then(response => response.json()
      .then(data => data)
    );
}

export const createUser = (payload) => {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: payload
  });
}





