import { useQuery } from '@tanstack/react-query';
import { parseCookies } from 'nookies';
import { getMyAccount } from '@/lib/apis/auth';

export default function useMyAccount() {
  const cookies = parseCookies();
  const myAccount = useQuery({
    queryKey: ['me'],
    queryFn: getMyAccount,
    refetchOnWindowFocus: true,
    enabled: cookies?.access_token !== undefined,
  });
  return myAccount;
}
