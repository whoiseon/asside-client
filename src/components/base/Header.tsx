import styled from '@emotion/styled';
import { themedPalette } from '@/styles/palette';
import Logo from '@/assets/vectors/logo.svg';
import React from 'react';
import HeaderMenuButton from '@/components/base/HeaderMenuButton';
import HeaderBackButton from '@/components/base/HeaderBackButton';
import { useGoBack } from '@/lib/hooks/useGoback';

interface Props {
  mode?: 'default' | 'onlyBack';
  headerLeft?: React.ReactNode;
  headerRight?: React.ReactNode;
  hasMenu?: boolean;
}

function Header({
  mode = 'default',
  headerLeft = <Logo />,
  hasMenu = true,
}: Props) {
  const goBack = useGoBack();

  if (mode === 'onlyBack') {
    return (
      <BackBlock>
        <HeaderBackButton onClick={goBack} />
      </BackBlock>
    );
  }

  return (
    <Block>
      <Left>{headerLeft}</Left>
      {hasMenu && (
        <Right>
          <HeaderMenuButton />
        </Right>
      )}
    </Block>
  );
}

const Block = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  border-bottom: 1px solid ${themedPalette.border4};
  background-color: ${themedPalette.bg_element1};
  padding-left: 16px;
  padding-right: 16px;
  svg {
    color: ${themedPalette.text1};
  }
`;

const BackBlock = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
  padding-left: 16px;
`;

const Left = styled.div`
  svg {
    display: block;
    width: 72px;
  }
`;

const Right = styled.div`
  svg {
    width: 24px;
    height: 24px;
  }
`;

export default Header;