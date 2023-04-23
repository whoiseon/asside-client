import React from 'react';
import styled from '@emotion/styled';
import CheckBoxFalse from '@/assets/vectors/checkbox-false-icon.svg';
import CheckBoxTrue from '@/assets/vectors/checkbox-true-icon.svg';
import { themedPalette } from '@/styles/palette';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function CheckBox({ label, ...rest }: Props) {
  return (
    <Block>
      <Icon>{rest.checked ? <CheckBoxTrue /> : <CheckBoxFalse />}</Icon>
      <StyledCheckBox type="checkbox" {...rest} />
      <label htmlFor={rest.id}>{label}</label>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  align-items: center;
  margin-left: -3px;
  label {
    font-size: 16px;
    font-weight: 500;
    color: ${themedPalette.text2};
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    color: ${themedPalette.border4};
  }
`;

const StyledCheckBox = styled.input`
  display: none;
`;

export default CheckBox;
