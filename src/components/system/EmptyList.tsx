import { themedPalette } from '@/styles/palette';
import styled from '@emotion/styled';

interface Props {
  message?: string;
}

function EmptyList({ message = '리스트가 비어있습니다.' }: Props) {
  return <Block>{message}</Block>;
}

const Block = styled.div`
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${themedPalette.text3};
  white-space: pre-wrap;
  line-height: 1.5;
  text-align: center;
  margin-top: 56px;
`;

export default EmptyList;
