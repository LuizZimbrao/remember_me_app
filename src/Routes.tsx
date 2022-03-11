/* eslint-disable react/prop-types */
import { Routes as Switch, Route, Navigate } from 'react-router-dom';

import Rooms from './pages/rooms';
import Home from './pages/home';
import Links from './pages/links';
import Login from './pages/login';
import NotFound from './pages/notFound';

function PrivateRoute({ children, redirectTo = '/login' }) {
  const token = localStorage.getItem('token');

  return token ? children : <Navigate to={redirectTo} />;
}

export default function Routes() {
  return (
    <Switch>
      <Route
        path="/"
        element={(
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        )}
      />
      <Route
        path="/rooms"
        element={(
          <PrivateRoute>
            <Rooms />
          </PrivateRoute>
        )}
      />
      <Route
        path="/links"
        element={(
          <PrivateRoute>
            <Links />
          </PrivateRoute>
        )}
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Switch>
  );
}
