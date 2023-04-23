import styled from '@emotion/styled';
import SuccessIcon from '@/assets/vectors/signed-up-success-icon.svg';
import { themedPalette } from '@/styles/palette';
import Button from '@/components/system/Button';
import React from 'react';
import transitions from '@/styles/transitions';

interface Props {
  setIsSignedUp?: React.Dispatch<React.SetStateAction<boolean>>;
}

function SignedUp({ setIsSignedUp }: Props) {
  return (
    <Block>
      <ImageBox>
        <SuccessIcon />
      </ImageBox>
      <TextBox>
        <h1>회원가입 성공!</h1>
        <p>새롭게 오신 것을 환영합니다!</p>
      </TextBox>
      <ActionsBox>
        <Button
          layout="fullWidth"
          href="/login"
          onClick={() => {
            if (setIsSignedUp) setIsSignedUp(false);
          }}
        >
          로그인하러 가기
        </Button>
      </ActionsBox>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 32px;
  padding-left: 16px;
  padding-right: 16px;
  animation: ${transitions.fadeInSlideUp} 0.3s ease-in-out;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  svg {
    width: 96px;
    color: ${themedPalette.primary1};
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
  h1 {
    margin: 0;
    font-size: 24px;
    color: ${themedPalette.primary1};
    line-height: 1.5;
  }
  p {
    margin: 0;
  }
`;

const ActionsBox = styled.div`
  margin-top: 8px;
`;

export default SignedUp;
