import { client } from '@/lib/client';

export async function getUserProfile(userId: number) {
  const response = await client.get(`/api/user/${userId}`);
}
