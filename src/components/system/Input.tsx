import React from 'react';
import styled from '@emotion/styled';
import { themedPalette } from '@/styles/palette';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input(props: Props) {
  return <StyledInput {...props} />;
}

const StyledInput = styled.input`
  height: 48px;
  border: 1px solid ${themedPalette.border4};
  border-radius: 4px;
  background-color: ${themedPalette.bg_element1};
  color: ${themedPalette.text1};
  transition: border 0.125s ease-in-out;
  padding: 0 12px;
  font-size: 16px;
  outline: none;

  &:focus {
    border: 1px solid ${themedPalette.primary1};
  }

  &::placeholder {
    color: ${themedPalette.text4};
  }
`;

export default Input;
