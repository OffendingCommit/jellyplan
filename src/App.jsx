/* eslint-disable no-param-reassign */
import React from 'react';
import { Grommet } from 'grommet';
import { withAuthenticator } from '@aws-amplify/ui-react';
import theme from './theme';

import Home from './scenes/Home/Home';
import '@aws-amplify/ui-react/styles.css';
import { PropTypes } from 'prop-types';
import MealDate from './components/MealDate/MealDate';

function App({ signOut, user }) {
  return (
    <Grommet theme={theme}>
      <Home />
    </Grommet>
  );
}

App.propTypes = {
  user: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired,
};

export default withAuthenticator(App);
