import styled from '@emotion/styled';
import MenuIcon from '@/assets/vectors/menu-icon.svg';
import MenuCloseIcon from '@/assets/vectors/menu-close-icon.svg';
import React from 'react';
import { themedPalette } from '@/styles/palette';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  menuOpen?: boolean;
}

function HeaderMenuButton({ menuOpen, ...rest }: Props) {
  return (
    <StyledButton {...rest}>
      {!menuOpen ? <MenuIcon /> : <MenuCloseIcon />}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  padding: 8px;
  margin-right: -8px;
  cursor: pointer;
  width: 36px;
  height: 36px;
  svg {
    width: 20px;
    height: 20px;
    color: ${themedPalette.text2};
  }
`;

export default HeaderMenuButton;
