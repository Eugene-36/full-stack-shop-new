import React from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom';
// import DevicePage from '../pages/DevicePage';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes.js';

console.log('publicRoutes', publicRoutes);

export default function AppRouter() {
  const isAuth = false;
  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} element={<Component />} exact />;
        })}

      {publicRoutes.map(({ path, Component }) => {
        console.log('path', path);
        console.log('Component', Component);
        return <Route key={path} path={path} element={<Component />} exact />;
      })}
    </Routes>
  );
}
