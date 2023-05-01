import styled from '@emotion/styled';
import useMyAccount from '@/lib/hooks/useMyAccount';
import { themedPalette } from '@/styles/palette';

interface Props {
  size?: number;
}

function DefaultProfile({ size = 80 }: Props) {
  const { data: userData } = useMyAccount();
  const usernameFirstLetter = userData?.username[0].toUpperCase();

  return <StyledProfile size={size}>{usernameFirstLetter}</StyledProfile>;
}

const StyledProfile = styled.div<{ size?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: ${themedPalette.bg_element4};
  border-radius: 50%;
  font-size: ${({ size }) => (size ? size / 2 : 0)}px;
  color: ${themedPalette.primary2};
  font-weight: bold;
  cursor: default;
`;

export default DefaultProfile;
