import { useQuery } from '@tanstack/react-query';
import { parseCookies } from 'nookies';
import { getMyAccount } from '@/lib/apis/auth';
import { queryKey } from '@/lib/queryKey';
import { User } from '@/lib/apis/types';

export default function useMyAccount() {
  const myAccount = useQuery<User>({
    queryKey: [queryKey.CURRENT_USER],
    queryFn: getMyAccount,
    refetchOnWindowFocus: true,
    retry: false,
    staleTime: 1000 * 60 * 5, // 10 minutes
  });
  return myAccount;
}
