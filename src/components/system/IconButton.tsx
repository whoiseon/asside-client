import styled from '@emotion/styled';
import { themedPalette } from '@/styles/palette';
import { ReactNode } from 'react';
import { media } from '@/lib/media';

interface Props {
  onClick?: () => void;
  icon: ReactNode;
}

function IconButton({ onClick = () => {}, icon }: Props) {
  return <StyledIconButton onClick={onClick}>{icon}</StyledIconButton>;
}

const StyledIconButton = styled.button`
  display: flex;
  align-items: inherit;
  justify-content: center;
  background: none;
  border: none;
  border-radius: 4px;
  padding: 8px;
  margin-left: -8px;
  cursor: pointer;

  svg {
    color: ${themedPalette.text1};
    width: 24px;
    height: 24px;
  }

  ${media.mobile} {
    transition: background-color 0.125s ease-in-out;
    &:hover {
      background-color: ${themedPalette.bg_element2};
    }
  }
`;

export default IconButton;
