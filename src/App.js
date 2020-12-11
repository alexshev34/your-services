import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/auth.hooks';
import useRoutes from './routes';

function App() {
  const {token, login, logout, userId} = useAuth()
  const isAuthenticated = token
  let routes = useRoutes(isAuthenticated)
  return (
    <AuthContext.Provider value ={{token, login, logout, userId, isAuthenticated}}>
      <React.Fragment>
        {routes}
      </React.Fragment>
    </AuthContext.Provider>
  );
}

export default App;


