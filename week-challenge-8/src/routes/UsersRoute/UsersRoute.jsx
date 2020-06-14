import React, { useState, useEffect } from 'react';

import UsersList from '../../containers/UsersList/UsersList';

import { getUsers } from '../../services/UserService';

const UsersRoute = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    getUsers().then(data => {
      setUsersList(data);
    });   
  }, []);

  return (
    <div className="container" data-testid="users-route">
      <UsersList
        users={usersList}
      />
    </div>
  );
};

export default UsersRoute;
