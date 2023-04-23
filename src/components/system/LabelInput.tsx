import styled from '@emotion/styled';
import Input, { type Props as InputProps } from '@/components/system/Input';
import { themedPalette } from '@/styles/palette';
import React, { useState } from 'react';
import CheckBox from '@/components/system/CheckBox';

interface Props extends InputProps {
  label: string;
}

function LabelInput({ label, ...rest }: Props) {
  const [focused, setFocused] = useState<boolean>(false);

  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = () => {
    setFocused(false);
  };

  return (
    <Block>
      <Label focused={focused}>{label}</Label>
      <Input onFocus={onFocus} onBlur={onBlur} {...rest} />
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label<{ focused?: boolean }>`
  font-size: 16px;
  line-height: 1.5;
  color: ${themedPalette.text2};
  font-weight: 600;
  margin-bottom: 8px;
  transition: color 0.125s ease-in-out;
  color: ${({ focused }) =>
    focused ? themedPalette.primary1 : themedPalette.text2};
`;

export default LabelInput;
