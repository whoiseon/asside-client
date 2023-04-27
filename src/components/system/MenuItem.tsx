import React, { MouseEvent } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { themedPalette } from '@/styles/palette';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import RightArrowIcon from '@/assets/vectors/right-arrow-icon.svg';

interface Props {
  name: string;
  link: string;
  icon?: React.ReactNode;
  hasArrow?: boolean;
  onClick?: () => void;
  rightText?: string;
}

function MenuItem({
  name,
  link,
  icon,
  onClick,
  hasArrow = false,
  rightText,
}: Props) {
  const { pathname } = useRouter();

  if (link === '/logout') {
    return (
      <Block>
        <StyledButton onClick={onClick}>
          <LeftBox>
            {icon ? icon : null}
            {name}
          </LeftBox>
          <RightBox>
            {rightText ? <RightText>{rightText}</RightText> : null}
            {hasArrow ? <RightArrowIcon /> : null}
          </RightBox>
        </StyledButton>
      </Block>
    );
  }

  return (
    <Block isActive={pathname === link}>
      <StyledLink href={link}>
        <LeftBox>
          {icon ? icon : null}
          {name}
        </LeftBox>
        <RightBox>
          {rightText ? <RightText>{rightText}</RightText> : null}
          {hasArrow ? <RightArrowIcon /> : null}
        </RightBox>
      </StyledLink>
    </Block>
  );
}

const Block = styled.div<{ isActive?: boolean }>`
  position: relative;
  ${({ isActive }) =>
    isActive &&
    css`
      a {
        background-color: ${themedPalette.bg_element3};
        svg {
          color: ${themedPalette.text2};
        }
      }
    `};
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 8px;
  padding-left: 8px;
  min-height: 40px;
  color: ${themedPalette.text1};
  border-radius: 4px;
  transition: background-color 0.125s ease-in-out;
  line-height: 1.5;

  &:hover {
    background-color: ${themedPalette.bg_element2};
  }
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  width: 100%;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  min-height: 40px;
  color: ${themedPalette.text1};
  border-radius: 4px;
  transition: background-color 0.125s ease-in-out;
  line-height: 1.5;

  &:hover {
    background-color: ${themedPalette.bg_element2};
  }
`;

const LeftBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  svg {
    width: 20px;
    color: ${themedPalette.text4};
  }
`;

const RightBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  svg {
    width: 12px;
    color: ${themedPalette.text4};
  }
`;

const RightText = styled.span`
  font-size: 14px;
  color: ${themedPalette.text4};
`;

export default MenuItem;
