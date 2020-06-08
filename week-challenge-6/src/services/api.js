const URL = "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts";

const api = fetch(URL)
.then(response => response.json()
        .then(data => data)
);

export default api;