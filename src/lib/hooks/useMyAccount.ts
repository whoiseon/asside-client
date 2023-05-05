import { useQuery } from '@tanstack/react-query';
import { parseCookies } from 'nookies';
import { getMyAccount } from '@/lib/apis/auth';
import { queryKey } from '@/lib/queryKey';
import { User } from '@/lib/apis/types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '@/modules/user';

export default function useMyAccount() {
  const dispatch = useDispatch();

  const myAccount = useQuery<User>({
    queryKey: [queryKey.CURRENT_USER],
    queryFn: getMyAccount,
    refetchOnWindowFocus: true,
    retry: false,
    staleTime: 1000 * 60 * 5, // 10 minutes
  });

  useEffect(() => {
    dispatch(
      setUser({
        id: myAccount.data?.id ?? null,
        username: myAccount.data?.username ?? '',
        email: myAccount.data?.email ?? '',
        isLoggedIn: true,
      }),
    );
  }, []);

  return myAccount;
}
