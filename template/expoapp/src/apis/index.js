import axios from 'axios';

const server = axios.create({
  baseURL: process.env.EXPO_PUBLIC_DOMAIN_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const getServer = () => server;
export default server;
