import React, { useState, useEffect } from 'react';
import '../App.css';
import { API } from 'aws-amplify';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { createUser as createUserMutation } from '../graphql/mutations';

const initialFormState = { username: '' }

function AdminPage() {
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
          <Typography variant="h6">Username </Typography>
        </div>
        <div>
          <input
            onChange={e => setFormData({ ...formData, 'name': e.target.value})}
            placeholder="Username"
            value={formData.username}
          />
        </div>
      </div>
      <div>
        <button onClick={createUser}>Create User</button>
      </div>
    </div>
  );
}

export default AdminPage;