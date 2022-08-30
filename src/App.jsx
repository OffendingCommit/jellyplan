/* eslint-disable no-param-reassign */
import React from 'react';
import { Grommet } from 'grommet';
import theme from './theme';
import Home from './scenes/Home/Home';

function App() {
  return (
    <Grommet theme={theme}>
      <Home />
    </Grommet>
  );
}

export default App;
