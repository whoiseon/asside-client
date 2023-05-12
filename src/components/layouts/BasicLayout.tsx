import FullHeightPage from '@/components/system/FullHeightPage';
import Header from '@/components/base/Header';
import styled from '@emotion/styled';
import React, { memo } from 'react';
import { useThemeEffect } from '@/lib/hooks/useThemeEffect';

interface Props {
  children?: React.ReactNode;
  className?: string;
  header?: 'default' | 'onlyBack';
}

function BasicLayout({ children, className, header = 'default' }: Props) {
  useThemeEffect();
  return (
    <FullHeightPage>
      <Header mode={header} />
      <Content className={className}>{children}</Content>
    </FullHeightPage>
  );
}

const Content = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: scroll;
  overflow-x: hidden;
`;

export default memo(BasicLayout);
