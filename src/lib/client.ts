import axios from 'axios';

export const client = axios.create({
  withCredentials: true,
});

client.defaults.baseURL = 'http://localhost:4000/api';

export function setClientCookie(cookie: string) {
  client.defaults.headers.common['Cookie'] = cookie;
}

export function clearClientCookie() {
  delete client.defaults.headers.common['Cookie'];
}
