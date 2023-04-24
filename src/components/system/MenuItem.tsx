import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { themedPalette } from '@/styles/palette';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

interface Props {
  name: string;
  link: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  hasArrow?: boolean;
}

function MenuItem({ name, link, icon, onClick, hasArrow = true }: Props) {
  const { pathname } = useRouter();
  const isActive = pathname === link;

  return (
    <Block>
      <StyledLink href={link} isActive={isActive}>
        <LeftBox>
          {icon ? icon : null}
          {name}
        </LeftBox>
      </StyledLink>
    </Block>
  );
}

const Block = styled.div`
  position: relative;
`;

const StyledLink = styled(Link)<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 12px;
  padding-left: 12px;
  min-height: 40px;
  color: ${themedPalette.text1};
  border-radius: 4px;
  transition: background-color 0.125s ease-in-out;
  line-height: 1.5;

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${themedPalette.bg_element3};
      svg {
        color: ${themedPalette.text2};
      }
    `};

  &:hover {
    background-color: ${themedPalette.bg_element2};
  }
`;

const LeftBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  svg {
    width: 24px;
    color: ${themedPalette.text3};
  }
`;

const RightBox = styled.div``;

export default MenuItem;
