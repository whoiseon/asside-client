import { LoginParams, SignUpParams } from '@/lib/apis/types';
import apiClient from '@/lib/apis/client';

export const logIn = async (params: LoginParams) => {
  const response = await apiClient.post('/auth/login/local', params);
  return response.data;
};

export const signUp = async (params: SignUpParams) => {
  const response = await apiClient.post('/auth/signup/local', params);
  return response.data;
};
