import React, { useState, useEffect } from 'react';
import '../App.css';
import { API } from 'aws-amplify';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { createUser as createUserMutation } from '../graphql/mutations';

const initialFormState = { username: '' }

function CreateUser() {
  const [formData, setFormData] = useState(initialFormState);

  async function createUser() {
    if (!formData.username) return;
    await API.graphql({ query: createUserMutation, variables: { input: formData } });
    setFormData(initialFormState);
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div>
          <TextField id='create-username' label='Username'
              onChange={e => setFormData({username: e.target.value})} />
        </div>
      </div>
      <div style={{marginTop: '20px'}}>
        <Button onClick={createUser}>Create User</Button>
      </div>
    </div>
  );
}

export default CreateUser;