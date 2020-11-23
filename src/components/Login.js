import React, { useState, useEffect } from 'react';
import '../App.css';
import { API } from 'aws-amplify';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { listUsers } from '../graphql/queries';

const initialFormState = { username: '' }

function Login(props) {
  const [formData, setFormData] = useState(initialFormState);
 
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const apiData = await API.graphql({ query: listUsers });
    setUsers(apiData.data.listUsers.items);
  }

  async function login() {
    if (!formData.username) return;
    if(users && users.find(user => user.username === formData.username)) {
      props.cookies.set('username', formData.username, { path: '/' });
      props.onLoginComplete(formData.username);
    }
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{display: 'flex', flexDirection: 'row', marginTop: '80px'}}>
        <div>
          <TextField id='login-username' label='Username'
            onChange={e => setFormData({username: e.target.value})} />
        </div>
      </div>
      <div style={{marginTop: '10px'}}>
        <Button onClick={login}>Login</Button>
      </div>
    </div>
  );
}

export default Login;