import styled from '@emotion/styled';
import MenuIcon from '@/assets/vectors/menu-icon.svg';
import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function HeaderMenuButton(props: Props) {
  return (
    <StyledButton {...props}>
      <MenuIcon />
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
`;

export default HeaderMenuButton;
