import React from 'react';

import User from '../../components/User';
import Loading from '../../components/Loading';

import './UsersList.scss';

const userListMock = [..."teste"];

const UsersList = ({ users }) => {
  
  return (
    <section className="users-list" data-testid="users-list">
      {
        userListMock.length > 0 ? 
        userListMock.map((user, index) => (
          <User key={index} />
        ))
        :
        <Loading />
      }
    </section>
  )
};

export default UsersList;
