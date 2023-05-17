import { FormEvent, ReactNode } from 'react';
import styled from '@emotion/styled';
import { themedPalette } from '@/styles/palette';
import Button from '@/components/system/Button';
import { css } from '@emotion/react';
import { media } from '@/lib/media';

interface Props {
  type?: 'basic' | 'form';
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  errorMessage?: string | null;
  description?: string;
  buttonText?: string;
  isDanger?: boolean;
}

function BasicCard({
  type = 'basic',
  children,
  title,
  icon,
  onSubmit,
  errorMessage = null,
  description,
  buttonText = '저장',
  isDanger = false,
}: Props) {
  if (type === 'form') {
    return (
      <StyledFormCard onSubmit={onSubmit} isDanger={isDanger}>
        {title ? (
          <Title isDanger={isDanger}>
            {icon ? icon : null}
            <p>{title}</p>
          </Title>
        ) : undefined}
        {description ? <Description>{description}</Description> : null}
        <Content>{children}</Content>
        <FormActionBox>
          <ErrorMessage>{errorMessage ? errorMessage : undefined}</ErrorMessage>
          <Button size="small" variant="primary">
            {buttonText}
          </Button>
        </FormActionBox>
      </StyledFormCard>
    );
  }

  return (
    <StyledCard isDanger={isDanger}>
      {title ? (
        <Title isDanger={isDanger}>
          {icon ? icon : null}
          <p>{title}</p>
        </Title>
      ) : undefined}
      <Content>{children}</Content>
    </StyledCard>
  );
}

const StyledCard = styled.div<{ isDanger?: boolean }>`
  background-color: ${themedPalette.bg_element1};
  border: 1px solid ${themedPalette.border4};
  border-radius: 4px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;

  ${({ isDanger }) =>
    isDanger &&
    css`
      border: 1px solid ${themedPalette.destructive1};

      button {
        background-color: ${themedPalette.destructive1};
      }
    `}
`;

const StyledFormCard = styled.form<{ isDanger?: boolean }>`
  background-color: ${themedPalette.bg_element1};
  border: 1px solid ${themedPalette.border4};
  border-radius: 4px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;

  ${({ isDanger }) =>
    isDanger &&
    css`
      border: 1px solid ${themedPalette.destructive1};

      button {
        background-color: ${themedPalette.destructive1};
      }
    `}
`;

const Title = styled.div<{ isDanger?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
  p {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
    color: ${themedPalette.text3};
  }
  svg {
    width: 20px;
    color: ${themedPalette.text3};
  }

  ${({ isDanger }) =>
    isDanger &&
    css`
      p {
        color: ${themedPalette.destructive1};
      }
      svg {
        color: ${themedPalette.destructive1};
      }
    `}
`;

const Content = styled.div`
  padding: 8px 16px 32px;

  ${media.mobile} {
    padding: 16px 16px 32px;
  }
`;

const FormActionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${themedPalette.bg_element2};
  border-top: 1px solid ${themedPalette.border4};
  padding: 12px 16px;
  button {
    width: 90px;
    height: 32px;
  }
`;

const ErrorMessage = styled.div`
  // TODO: add animation
  color: ${themedPalette.destructive1};
  font-weight: bold;
`;

const Description = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  font-size: 14px;
  color: ${themedPalette.text2};
  margin-top: 4px;
  margin-bottom: 8px;
`;

export default BasicCard;
