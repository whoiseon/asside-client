import { FormEvent, ReactNode } from 'react';
import styled from '@emotion/styled';
import { themedPalette } from '@/styles/palette';
import Button from '@/components/system/Button';

interface Props {
  type?: 'basic' | 'form';
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  errorMessage?: string | null;
}

function BasicCard({
  type = 'basic',
  children,
  title,
  icon,
  onSubmit,
  errorMessage = null,
}: Props) {
  if (type === 'form') {
    return (
      <StyledFormCard onSubmit={onSubmit}>
        {title ? (
          <Title>
            {icon ? icon : null}
            <p>{title}</p>
          </Title>
        ) : undefined}
        <Content>{children}</Content>
        <FormActionBox>
          <ErrorMessage>{errorMessage ? errorMessage : undefined}</ErrorMessage>
          <Button size="small" variant="primary">
            저장
          </Button>
        </FormActionBox>
      </StyledFormCard>
    );
  }

  return (
    <StyledCard>
      {title ? (
        <Title>
          {icon ? icon : null}
          <p>{title}</p>
        </Title>
      ) : undefined}
      <Content>{children}</Content>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  background-color: ${themedPalette.bg_element1};
  border: 1px solid ${themedPalette.border4};
  border-radius: 4px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
`;

const StyledFormCard = styled.form`
  background-color: ${themedPalette.bg_element1};
  border: 1px solid ${themedPalette.border4};
  border-radius: 4px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
`;

const Title = styled.div`
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
`;

const Content = styled.div`
  padding: 16px 16px 32px;
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

export default BasicCard;
