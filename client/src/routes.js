import Admin from './pages/Admin.js';
import Basket from './pages/Basket.js';
import Shop from './pages/Shop.js';
import Auth from './pages/Auth.js';
import DevicePage from './pages/DevicePage.js';

import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from './utils/consts.js';

// Тут будут доступны роуты только для зарегистрированых пользователей
export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },

  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];
// Еще и в routes.js нужно добавить
// < ИмяКомпонента /> для каждого компонента маршрута

// По этим маршрутам может перейти абсолютно любой пользователь
export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },

  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },

  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },

  {
    path: DEVICE_ROUTE + '/:id',
    Component: DevicePage,
  },
];
