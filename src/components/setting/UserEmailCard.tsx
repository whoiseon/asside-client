import UserPasswordIcon from '@/assets/vectors/setting-password-icon.svg';
import BasicCard from '@/components/base/BasicCard';
import { FormEvent, useState } from 'react';
import styled from '@emotion/styled';
import useMyAccount from '@/lib/hooks/useMyAccount';
import { useInput } from '@/lib/hooks/useInput';
import LabelInput from '@/components/system/LabelInput';
import Input from '@/components/system/Input';

function UserEmailCard() {
  const { data: myAccount } = useMyAccount();

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
      icon={<UserPasswordIcon />}
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
    </BasicCard>
  );
}

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default UserEmailCard;
