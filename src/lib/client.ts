import axios from 'axios';
import { parseCookies } from 'nookies';
import { refreshToken } from '@/lib/apis/auth';

export const client = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true,
});

export function setClientCookie(cookie: string) {
  client.defaults.headers.common['Cookie'] = cookie;
}

export function clearClientCookie() {
  delete client.defaults.headers.common['Cookie'];
}

client.interceptors.response.use(
  (response) => {
    return response;
  },
  async (e) => {
    const error = e.response?.data;
    if (error?.name === 'UnauthorizedError' && error?.payload?.isExpiredToken) {
      try {
        await refreshToken();
        return client.request(e.config);
      } catch (e) {
        return Promise.reject(e);
      }
    }
  },
);
