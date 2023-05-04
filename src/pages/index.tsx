import Head from 'next/head';
import { useThemeEffect } from '@/lib/hooks/useThemeEffect';
import { useToggleTheme } from '@/lib/hooks/useToggleTheme';
import BasicLayout from '@/components/layouts/BasicLayout';
import { GetServerSideProps } from 'next';
import { dehydrate, QueryClient } from '@tanstack/query-core';
import { getMyAccount } from '@/lib/apis/auth';
import useMyAccount from '@/lib/hooks/useMyAccount';
import Link from 'next/link';
import { clearClientCookie, setClientCookie } from '@/lib/client';
import { queryKey } from '@/lib/queryKey';

export default function Home() {
  const { data } = useMyAccount();
  const [nowTheme, toggleTheme] = useToggleTheme();
  useThemeEffect();

  return (
    <>
      <Head>
        <title>d:Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BasicLayout>
        <h1>Hello, Asside</h1>
        <button onClick={toggleTheme}>다크모드</button>
        {!data && <Link href="/login">로그인</Link>}
      </BasicLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  clearClientCookie();

  const { req, res } = ctx;
  const queryClient = new QueryClient();
  const cookie = req ? req.headers.cookie : '';
  if (!cookie) {
    return {
      props: {},
    };
  }

  setClientCookie(cookie);
  await queryClient.prefetchQuery([queryKey.CURRENT_USER], getMyAccount, {});

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
