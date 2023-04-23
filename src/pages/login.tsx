import Head from 'next/head';
import styled from '@emotion/styled';
import AuthForm from '@/components/auth/AuthForm';
import BasicLayout from '@/components/layouts/BasicLayout';

function login() {
  return (
    <>
      <Head>
        <title>로그인 - Asside</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BasicLayout header="onlyBack">
        <AuthForm mode="login" />
      </BasicLayout>
    </>
  );
}

export default login;
