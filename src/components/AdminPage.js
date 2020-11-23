import React, { useState, useEffect } from 'react';
import '../App.css';

import UserList from './UserList';
import CreateUser from './CreateUser';

function AdminPage() {

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <UserList />
      <CreateUser />
    </div>
  );
}

export default AdminPage;