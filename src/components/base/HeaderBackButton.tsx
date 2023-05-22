import BackArrowIcon from '@/assets/vectors/back-arrow-icon.svg';
import styled from '@emotion/styled';
import { themedPalette } from '@/styles/palette';
import IconButton from '@/components/system/IconButton';

interface Props {
  onClick?: () => void;
}

function HeaderBackButton({ onClick }: Props) {
  return <IconButton onClick={onClick} icon={<BackArrowIcon />} />;
}

export default HeaderBackButton;
