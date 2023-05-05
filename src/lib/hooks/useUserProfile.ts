import { useQuery } from '@tanstack/react-query';
import { queryKey } from '@/lib/queryKey';
import { getUserProfile } from '@/lib/apis/user';

export default function useUserProfile(username: string) {
  const userProfile = useQuery({
    queryKey: queryKey.USER(username.substring(1)),
    queryFn: () => getUserProfile(username.substring(1)),
  });

  return userProfile;
}
