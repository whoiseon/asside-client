import {
  LoginParams,
  LoginResult,
  SignUpParams,
  SignUpResult,
  Tokens,
  User,
} from '@/lib/apis/types';
import { client } from '@/lib/client';

export const logIn = async (params: LoginParams) => {
  const response = await client.post<LoginResult>(
    '/api/auth/login/local',
    params,
  );
  return response.data;
};

export const signUp = async (params: SignUpParams) => {
  const response = await client.post<SignUpResult>(
    '/api/auth/signup/local',
    params,
  );
  return response.data;
};

export const logOut = async () => {
  await client.post('/api/auth/logout', {});
};

export const getMyAccount = async () => {
  const response = await client.get<User>('/api/me');
  return response.data;
};

export const refreshToken = async () => {
  const response = await client.post<Tokens>('/api/auth/refresh', {});
  return response.data;
};
