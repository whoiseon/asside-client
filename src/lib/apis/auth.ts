import { LoginParams, SignUpParams } from '@/lib/apis/types';
import { client } from '@/lib/client';

export const logIn = async (params: LoginParams) => {
  const response = await client.post('/api/auth/login/local', params);
  console.log(response);
  return response.data;
};

export const signUp = async (params: SignUpParams) => {
  const response = await client.post('/api/auth/signup/local', params);
  return response.data;
};

export const getMyAccount = async () => {
  const response = await client.get('/api/me');
  return response.data;
};

export const refreshToken = async () => {
  const response = await client.post('/api/auth/refresh');
  return response.data;
};
