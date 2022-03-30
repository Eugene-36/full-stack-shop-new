import axios from 'axios';

//  Первый запрос будет там где не нужна авторизация

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Запросы на которые нужна авторизация
const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Интерцептор это функция которая передаёт вторым параметром конфиг
const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
