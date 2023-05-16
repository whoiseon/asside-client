import BasicCard from '@/components/base/BasicCard';
import UserEmailIcon from '@/assets/vectors/email-icon.svg';
import { FormEvent, useState } from 'react';
import styled from '@emotion/styled';
import useMyAccount from '@/lib/hooks/useMyAccount';
import { useInput } from '@/lib/hooks/useInput';
import LabelInput from '@/components/system/LabelInput';
import Input from '@/components/system/Input';
import useUserProfile from '@/lib/hooks/useUserProfile';
import { themedPalette } from '@/styles/palette';

function UserEmailCard() {
  const { data: myAccount } = useMyAccount();
  const { data: userData } = useUserProfile(myAccount?.username as string);

  const [email, onChangeEmail, setEmail] = useInput(
    (myAccount?.email as string) || '',
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('변경완료');
  }

  return (
    <BasicCard
      type="form"
      icon={<UserEmailIcon />}
      title="이메일 인증"
      onSubmit={onSubmit}
      errorMessage={errorMessage}
      description="이메일 인증을 통해 회원님의 계정을 안전하게 보호하세요."
      buttonText="인증"
    >
      <InputGroup>
        <Input
          type="email"
          value={email}
          onChange={onChangeEmail}
          placeholder="이메일을 입력하세요."
        />
      </InputGroup>
      <VerifiedText isVerified={userData?.emailVerified}>
        {userData?.emailVerified
          ? '인증을 완료하셨어요!'
          : '아직 인증하지 않으셨군요!'}
      </VerifiedText>
    </BasicCard>
  );
}

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const VerifiedText = styled.div<{ isVerified?: boolean }>`
  display: inline-flex;
  margin-top: 16px;
  font-size: 14px;
  padding: 6px 10px;
  border-radius: 4px;
  background-color: ${({ isVerified }) =>
    isVerified ? themedPalette.primary1 : themedPalette.destructive1};
  color: ${themedPalette.button_text};
  font-weight: bold;
`;

export default UserEmailCard;
