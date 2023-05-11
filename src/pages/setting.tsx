import Head from 'next/head';
import useMyAccount from '@/lib/hooks/useMyAccount';
import BasicLayout from '@/components/layouts/BasicLayout';
import UserSetting from '@/components/setting/UserSetting';
import { GetServerSideProps } from 'next';
import { clearClientCookie, setClientCookie } from '@/lib/client';
import { dehydrate, QueryClient } from '@tanstack/query-core';
import { queryKey } from '@/lib/queryKey';
import { getMyAccount } from '@/lib/apis/auth';

function Setting() {
  const { data: meData } = useMyAccount();
  return (
    <>
      <Head>
        <title>{meData?.username} 님의 계정 - asside</title>
      </Head>
      <BasicLayout>
        <UserSetting />
      </BasicLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { req, res } = ctx;
  const { cookies } = req;

  if (!cookies.access_token) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
      props: {},
    };
  }

  clearClientCookie();
  const queryClient = new QueryClient();
  const cookie = req ? req.headers.cookie : '';
  if (!cookie) {
    return {
      props: {},
    };
  }

  setClientCookie(cookie);
  await queryClient.prefetchQuery(queryKey.CURRENT_USER, getMyAccount, {});

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default Setting;
