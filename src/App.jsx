/* eslint-disable no-param-reassign */
import React from 'react';
// import { Grommet } from 'grommet';
import { Authenticator } from '@aws-amplify/ui-react';
// import theme from './theme';
// import Home from './scenes/Home/Home';
import { PropTypes } from 'prop-types';

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

App.propTypes = {
  user: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired,
};

export default App;
