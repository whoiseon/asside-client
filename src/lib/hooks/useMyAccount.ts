import { useQuery } from '@tanstack/react-query';
import { getMyAccount } from '@/lib/apis/auth';
import { queryKey } from '@/lib/queryKey';
import { User } from '@/lib/apis/types';

export default function useMyAccount() {
  const myAccount = useQuery<User>({
    queryKey: [queryKey.CURRENT_USER],
    queryFn: getMyAccount,
    refetchOnWindowFocus: true,
    retry: false,
  });

  return myAccount;
}
