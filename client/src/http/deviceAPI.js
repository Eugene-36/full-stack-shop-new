import { $authHost, $host } from './index.js';
import jwt_decode from 'jwt-decode';

export const createType = async (type) => {
  const { data } = await $authHost.post('api/type', type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get('api/type');
  console.log('data', data);
  return data;
};

// Теперь  делаем запрос за брендами

export const createBrand = async (brand) => {
  const { data } = await $authHost.post('api/brand', brand);
  return data;
};

export const fetchBrands = async () => {
  const { data } = await $host.get('api/brand');
  return data;
};

// Теперь  делаем запрос за Девайсами
export const createDevice = async (device) => {
  const { data } = await $authHost.post('api/device', device);
  return data;
};

export const fetchDevices = async () => {
  const { data } = await $host.get('api/device');
  return data;
};

export const fetchOneDevice = async (id) => {
  const { data } = await $host.get(`api/device/${id}`);
  return data;
};
