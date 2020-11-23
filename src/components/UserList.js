import React, { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';

import '../App.css';
import { API } from 'aws-amplify';
import { listUsers } from '../graphql/queries';
import { deleteUser as deleteUserMutation } from '../graphql/mutations';

function UserList() {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const apiData = await API.graphql({ query: listUsers });
    setUsers(apiData.data.listUsers.items);
  }

  async function deleteUser({ id }) {
    const newUsersArray = Users.filter(user => user.id !== id);
    setUsers(newUsersArray);
    await API.graphql({ query: deleteUserMutation, variables: { input: { id } }});
  }

  return (
    <div style={{marginBottom: 50}}>
      <h1>User List</h1>
      {
        Users.map(user => (
          <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ marginRight: '20px'}}>
            <span>{user.username}</span>
          </div>
          <div>
            <Button onClick={() => deleteUser(user)}>Delete User</Button>
          </div>
        </div>
        ))
      }
    </div>
  );
}

export default UserList;