import styled from '@emotion/styled';

interface Props {
  mode: 'login' | 'signup';
}

function AuthForm({ mode }: Props) {
  return (
    <StyledForm>
      <div>{mode}</div>
    </StyledForm>
  );
}

const StyledForm = styled.form``;

export default AuthForm;
