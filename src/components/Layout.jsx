// components/Layout.js
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthenticator, Button, Heading, View } from '@aws-amplify/ui-react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export function Layout() {
  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);
  const navigate = useNavigate();

  function logOut() {
    signOut();
    navigate('/login');
  }
  return (
    <>
      {/*<nav>*/}
      {/*  <Button onClick={() => navigate('/')}>Home</Button>*/}
      {/*  <Button onClick={() => navigate('/protected')}>*/}
      {/*    First Protected Route*/}
      {/*  </Button>*/}

      {/*</nav>*/}

      {route === 'authenticated' ? (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                JellyPlan
              </Typography>

              <Button onClick={() => logOut()}>Logout</Button>
            </Toolbar>
          </AppBar>
        </Box>
      ) : null}

      {/*<Heading level={1}>Example Auth Routes App</Heading>*/}
      {/*<View>*/}
      {/*  {route === 'authenticated' ? 'You are logged in!' : 'Please Login!'}*/}
      {/*</View>*/}

      <Outlet />
    </>
  );
}
