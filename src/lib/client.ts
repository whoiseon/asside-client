import axios from 'axios';
import { parseCookies } from 'nookies';

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
    if (error?.name === 'TokenExpiredError' && error?.payload?.isExpiredToken) {
      const { refresh_token } = parseCookies();
      if (!refresh_token) {
        return Promise.reject(e);
      }
      try {
        const response = await axios.post(
          'http://localhost:4000/api/auth/refresh',
          {
            refresh_token,
          },
          {
            withCredentials: true,
          },
        );
        return client.request(e.config);
      } catch (e) {
        return Promise.reject(e);
      }
    }
  },
);

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzX3Rva2VuIiwidXNlcklkIjozLCJ0b2tlbklkIjoyNSwiZW1haWwiOiJ3aG9pc19fQG5hdmVyLmNvbSIsInVzZXJuYW1lIjoi7J247ISc64uIIiwiaWF0IjoxNjgyNDI3Mjc0LCJleHAiOjE2ODI0MjczMzR9.OOlp7CAbaqnRTJK_Eo-1awmRTS1JT0KQpFmh4jToQ18
