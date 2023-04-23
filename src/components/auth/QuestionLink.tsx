import styled from '@emotion/styled';
import Link from 'next/link';
import { themedPalette } from '@/styles/palette';

interface Props {
  question: string;
  name: string;
  href: string;
  className?: string;
}

function QuestionLink({ question, name, href, className }: Props) {
  return (
    <Block className={className}>
      {question} <Link href={href}>{name}</Link>
    </Block>
  );
}

const Block = styled.div`
  color: ${themedPalette.text2};
  a {
    color: ${themedPalette.primary1};
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default QuestionLink;
