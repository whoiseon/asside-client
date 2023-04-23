import styled from '@emotion/styled';
import LabelInput from '@/components/system/LabelInput';
import { themedPalette } from '@/styles/palette';
import Button from '@/components/system/Button';
import QuestionLink from '@/components/auth/QuestionLink';
import CheckBox from '@/components/system/CheckBox';
import React, { useMemo, useState } from 'react';
import { SignUpParams } from '@/lib/apis/types';
import { useForm } from 'react-hook-form';
import { loginFormErrors, registerFormErrors } from '@/lib/authFormErrors';
import SignedUp from '@/components/auth/SignedUp';
import transitions from '@/styles/transitions';

interface Props {
  mode: 'login' | 'signup';
  onSubmit: (params: SignUpParams) => void;
  isLoading: boolean;
  serverError?: string;
  isSignedUp?: boolean;
  setIsSignedUp?: React.Dispatch<React.SetStateAction<boolean>>;
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
    errorOptions: {
      usernameError: {},
      emailError: loginFormErrors.email,
      passwordError: loginFormErrors.password,
    },
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
    errorOptions: {
      usernameError: registerFormErrors.username,
      emailError: registerFormErrors.email,
      passwordError: registerFormErrors.password,
    },
  },
};

function AuthForm({
  mode,
  onSubmit,
  isLoading,
  serverError,
  isSignedUp,
  setIsSignedUp,
}: Props) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpParams>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const {
    welcomeText,
    usernamePlaceholder,
    emailPlaceholder,
    passwordPlaceholder,
    buttonText,
    question,
    actionName,
    actionLink,
    errorOptions: { usernameError, emailError, passwordError },
  } = modeDescriptions[mode];

  const onChangeShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleToTranslateError = useMemo(() => {
    switch (serverError) {
      case 'EmailExistsError':
        return '이미 사용중인 이메일 입니다!';
      case 'UsernameExistsError':
        return '이미 사용중인 이름 또는 닉네임 입니다!';
      case 'AuthenticationError':
        return '잘못된 계정 정보입니다!';
      case 'UnknownError':
        return '알 수 없는 오류가 발생하였습니다!';
      default:
        return undefined;
    }
  }, [serverError]);

  if (isSignedUp) {
    return <SignedUp setIsSignedUp={setIsSignedUp} />;
  }

  return (
    <Block>
      <Welcome>{welcomeText}</Welcome>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <LabelInput
            label="이메일"
            name="email"
            type="text"
            placeholder={emailPlaceholder}
            errors={errors.email}
            register={register}
            option={emailError}
          />
          {mode === 'signup' && (
            <LabelInput
              label="이름 또는 닉네임"
              name="username"
              type="text"
              placeholder={usernamePlaceholder}
              errors={errors.username}
              register={register}
              option={usernameError}
              disabled={isLoading}
            />
          )}
          <LabelInput
            label="비밀번호"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder={passwordPlaceholder}
            register={register}
            errors={errors.password}
            option={passwordError}
          />
        </InputGroup>
        {serverError && <ErrorMessage>{handleToTranslateError}</ErrorMessage>}
        <CheckGroup>
          <CheckBox
            label="비밀번호를 표시할게요"
            checked={showPassword}
            onChange={onChangeShowPassword}
            id="show-password"
          />
        </CheckGroup>
        <ActionsBox>
          <Button
            layout="fullWidth"
            variant="primary"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? `${buttonText}중 입니다...` : buttonText}
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
  animation: ${transitions.fadeInSlideUp} 0.3s ease-in-out;
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

const ErrorMessage = styled.p`
  margin-top: 8px;
  margin-bottom: 0;
  font-size: 16px;
  color: ${themedPalette.destructive1};
`;

export default AuthForm;
