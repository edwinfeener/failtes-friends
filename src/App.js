import React, { useState, useEffect } from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
// import { Auth } from 'aws-amplify';

import Cookies from 'universal-cookie';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Login from './components/Login';
import DrinkList from './components/DrinkList';
import CreateDrink from './components/CreateDrink';
import AdminPage from './components/AdminPage';

function App() {
  const cookies = new Cookies();
  const initialUser = cookies.get('username');

  const [currentUser, setCurrentUser] = useState(initialUser);
  const [currentView, setCurrentView] = useState(initialUser === undefined ? 'loginPage' : 'drinkList');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (currentUser && currentUser !== undefined) {
      openDrinkList();
    }
  }, [currentUser]);

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

  function openAdminPage() {
    openPage('adminPage');
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
            {currentUser &&
            <Menu open={menuOpen}>
              {currentUser === 'edwin' && <MenuItem onClick={openAdminPage}>Admin</MenuItem>}
              <MenuItem onClick={toggleMenu}>This Weeks Drinks</MenuItem>
              <MenuItem onClick={openDrinkList}>All Drinks</MenuItem>
              <MenuItem onClick={openCreateDrink}>Create a Drink</MenuItem>
            </Menu>}
            <Typography variant="h6">
              Failtes Friends
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </div>
      <div className="App">
        {currentView === 'loginPage' && <Login cookies={cookies} onLoginComplete={setCurrentUser} />}
        {currentView === 'adminPage' && <AdminPage />}
        {currentView === 'createDrink' && <CreateDrink />}
        {currentView === 'drinkList' && <DrinkList />}
        {currentView === 'signoutavailable' && <AmplifySignOut />}
      </div>
    </div>
  );
}

export default withAuthenticator(App);