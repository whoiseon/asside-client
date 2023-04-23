import BackArrowIcon from '@/assets/vectors/back-arrow-icon.svg';
import styled from '@emotion/styled';
import { themedPalette } from '@/styles/palette';

interface Props {
  onClick?: () => void;
}

function HeaderBackButton({ onClick }: Props) {
  return (
    <IconButton onClick={onClick}>
      <BackArrowIcon />
    </IconButton>
  );
}

const IconButton = styled.button`
  display: flex;
  align-items: inherit;
  justify-content: center;
  background: none;
  border: none;
  padding: 8px;
  margin-left: -8px;
  svg {
    color: ${themedPalette.text1};
    width: 24px;
    height: 24px;
  }
`;

export default HeaderBackButton;
