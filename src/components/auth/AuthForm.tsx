import styled from '@emotion/styled';
import LabelInput from '@/components/system/LabelInput';
import { themedPalette } from '@/styles/palette';
import Button from '@/components/system/Button';
import QuestionLink from '@/components/auth/QuestionLink';
import CheckBox from '@/components/system/CheckBox';
import { useState } from 'react';

interface Props {
  mode: 'login' | 'signup';
}

const modeDescriptions = {
  login: {
    welcomeText: '돌아오신 것을 환영해요!',
    usernamePlaceholder: '',
    emailPlaceholder: '이메일을 입력하세요',
    passwordPlaceholder: '비밀번호를 입력하세요',
    buttonText: '로그인',
    question: '새로 오셨나요?',
    actionName: '가입하기',
    actionLink: '/signup',
  },
  signup: {
    welcomeText: '처음 뵐게요 만나서 반가워요!',
    usernamePlaceholder: '영문, 한글, 숫자 16자 이하로 입력하세요',
    emailPlaceholder: '이메일 형식에 맞게 입력하세요',
    passwordPlaceholder: '8자 이상 영문, 숫자, 특수문자를 포함하여 입력하세요',
    buttonText: '가입하기',
    question: '계정이 있으세요?',
    actionName: '로그인',
    actionLink: '/login',
  },
};

function AuthForm({ mode }: Props) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    welcomeText,
    usernamePlaceholder,
    emailPlaceholder,
    passwordPlaceholder,
    buttonText,
    question,
    actionName,
    actionLink,
  } = modeDescriptions[mode];

  const onChangeShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Block>
      <Welcome>{welcomeText}</Welcome>
      <StyledForm>
        <InputGroup>
          <LabelInput
            label="이메일"
            type="email"
            placeholder={emailPlaceholder}
          />
          {mode === 'signup' && (
            <LabelInput
              label="닉네임"
              type="text"
              placeholder={usernamePlaceholder}
            />
          )}
          <LabelInput
            label="비밀번호"
            type={showPassword ? 'text' : 'password'}
            placeholder={passwordPlaceholder}
          />
        </InputGroup>
        <CheckGroup>
          <CheckBox
            label="비밀번호를 표시할게요"
            checked={showPassword}
            onChange={onChangeShowPassword}
            id="show-password"
          />
        </CheckGroup>
        <ActionsBox>
          <Button layout="fullWidth" variant="primary" type="submit">
            {buttonText}
          </Button>
          <QuestionLink
            question={question}
            name={actionName}
            href={actionLink}
          />
        </ActionsBox>
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

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CheckGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const ActionsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

export default AuthForm;
