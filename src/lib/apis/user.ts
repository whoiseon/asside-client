import { client } from '@/lib/client';
import { UserProfileResult } from '@/lib/apis/types';

export async function getUserProfile(username: string, tab: string) {
  const response = await client.get<UserProfileResult>(
    `/api/user?username=${username}&tab=${tab}`,
  );

  return response.data;
}
