import { useQuery } from '@tanstack/react-query';
import { parseCookies } from 'nookies';
import { getMyAccount } from '@/lib/apis/auth';
import { queryKey } from '@/lib/queryKey';
import { useRouter } from 'next/router';

export default function useMyAccount() {
  const router = useRouter();
  const cookies = parseCookies();
  const myAccount = useQuery({
    queryKey: [queryKey.CURRENT_USER],
    queryFn: getMyAccount,
    refetchOnWindowFocus: true,
    retry: false,
    enabled: cookies?.access_token !== undefined,
  });
  return myAccount;
}
