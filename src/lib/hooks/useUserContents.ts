import { useQuery } from '@tanstack/react-query';
import { queryKey } from '@/lib/queryKey';
import { getUserContents } from '@/lib/apis/user';

export function useUserContents(tab: string, username: string) {
  const userContents = useQuery({
    queryKey: queryKey.USER_CONTENTS(tab, username),
    queryFn: () => getUserContents(tab, username),
  });

  return userContents;
}
