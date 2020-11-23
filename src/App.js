import React, { useState, useEffect } from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
// import { Auth } from 'aws-amplify';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import DrinkList from './components/DrinkList';
import CreateDrink from './components/CreateDrink';
import AdminPage from './components/AdminPage';

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [currentView, setCurrentView] = useState('drinkList');
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect(() => {
  //   alert('USER CHANGED');;
  // }, [currentUser]);

  // Auth.currentAuthenticatedUser().then(user => setCurrentUser(user));

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  };

  function openCreateDrink() {
    openPage('createDrink');
  };

  function openDrinkList() {
    openPage('drinkList');
  };

  function openThisWeeksDrinks() {
    openPage('thisWeeksDrinks');
  };

  function openThisWeeksDrinks() {
    openPage('thisWeeksDrinks');
  };

  function openPage(pageName) {
    setMenuOpen(false);
    setCurrentView(pageName);
  };
  return (
    <div>
      <div style={{flexGrow: '1'}}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleMenu} onClose={toggleMenu}>
              <MenuIcon />
            </IconButton>
            <Menu open={menuOpen}>
              <MenuItem onClick={openAdminPage}>Admin</MenuItem>
              <MenuItem onClick={toggleMenu}>This Weeks Drinks</MenuItem>
              <MenuItem onClick={openDrinkList}>All Drinks</MenuItem>
              <MenuItem onClick={openCreateDrink}>Create a Drink</MenuItem>
            </Menu>
            <Typography variant="h6">
              Failtes Friends
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </div>
      <div className="App">
        {currentView === 'admin' && <AdminPage />}
        {currentView === 'createDrink' && <CreateDrink />}
        {currentView === 'drinkList' && <DrinkList />}
        {currentView === 'signoutavailable' && <AmplifySignOut />}
      </div>
    </div>
  );
}

export default withAuthenticator(App);