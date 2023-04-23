import styled from '@emotion/styled';
import LabelInput from '@/components/system/LabelInput';
import { themedPalette } from '@/styles/palette';

interface Props {
  mode: 'login' | 'signup';
}

function AuthForm({ mode }: Props) {
  return (
    <Block>
      <Welcome>{mode === 'login' ? '로그인' : '회원가입'}</Welcome>
      <StyledForm>
        <InputGroup>
          <LabelInput
            label="이메일"
            type="email"
            placeholder="이메일을 입력하세요"
          />
          <LabelInput
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력하세요"
          />
        </InputGroup>
      </StyledForm>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 32px;
`;

const Welcome = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 18px;
  font-weight: 700;
  color: ${themedPalette.text1};
`;

const StyledForm = styled.form``;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default AuthForm;
