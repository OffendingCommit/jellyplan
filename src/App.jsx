import { Amplify } from 'aws-amplify';

import { Protected } from './components/Protected';
import { RequireAuth } from './RequireAuth';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { Layout } from './components/Layout';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Authenticator, ThemeProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

export default function App() {
  return (
    <ThemeProvider>
      <Authenticator.Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="/protected"
                element={
                  <RequireAuth>
                    <Protected />
                  </RequireAuth>
                }
              />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Authenticator.Provider>
    </ThemeProvider>
  );
}
