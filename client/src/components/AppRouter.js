import React, { useContext } from 'react';

import { Routes, Route } from 'react-router-dom';
import Shop from '../pages/Shop.js';
import { authRoutes, publicRoutes } from '../routes.js';
import { Context } from '../index.js';

export default function AppRouter() {
  const { user } = useContext(Context);
  console.log('user', user.isAuth);
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} element={<Component />} exact />;
        })}

      {publicRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} element={<Component />} exact />;
      })}

      <Route path='*' element={<Shop />} />
    </Routes>
  );
}
