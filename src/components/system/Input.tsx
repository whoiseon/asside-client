import React from 'react';
import styled from '@emotion/styled';
import { themedPalette } from '@/styles/palette';
import { RegisterOptions } from 'react-hook-form';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: any;
  option?: RegisterOptions;
  errors?: any;
}

function Input({ errors, register, option, ...rest }: Props) {
  if (register) {
    return (
      <>
        <StyledInput {...register(rest.name, option)} {...rest} />
        {errors && <ErrorMessage>{errors.message}</ErrorMessage>}
      </>
    );
  }

  return <StyledInput {...rest} />;
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

  &:disabled {
    background-color: ${themedPalette.bg_page};
    color: ${themedPalette.text4};
  }
`;

const ErrorMessage = styled.p`
  margin-top: 8px;
  margin-bottom: 0;
  font-size: 14px;
  color: ${themedPalette.destructive1};
`;

export default Input;