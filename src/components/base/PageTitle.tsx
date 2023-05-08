import styled from '@emotion/styled';
import { memo, ReactNode } from 'react';
import { themedPalette } from '@/styles/palette';

interface Props {
  title: string;
  icon?: ReactNode;
}

function PageTitle({ title, icon = null }: Props) {
  return (
    <Block>
      {icon}
      <h1>{title}</h1>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    width: 20px;
    color: ${themedPalette.text3};
  }

  h1 {
    font-size: 18px;
    line-height: 1.5;
    margin: 0;
  }
`;

export default memo(PageTitle);
