import { client } from '@/lib/client';
import { UserProfileParams, UserProfileResult } from '@/lib/apis/types';

export async function getUserProfile(username: string) {
  const response = await client.get<UserProfileResult>(
    `/api/user?username=${username}`,
  );

  return response.data;
}

export async function updateUserProfile(params: UserProfileParams) {
  const { username, description } = params;
  const response = await client.patch('/api/user/profile', {
    username,
    description,
  });

  return response.data;
}
