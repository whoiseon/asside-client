import { FormEvent, useState } from 'react';
import UserPasswordIcon from '@/assets/vectors/setting-password-icon.svg';
import BasicCard from '@/components/base/BasicCard';
import styled from '@emotion/styled';
import { useInput } from '@/lib/hooks/useInput';
import LabelInput from '@/components/system/LabelInput';

function UserPasswordCard() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentPassword, onChangeCurrentPassword, setCurrentPassword] =
    useInput('');
  const [newPassword, onChangeNewPassword, setNewPassword] = useInput('');
  const [
    newPasswordConfirm,
    onChangeNewPasswordConfirm,
    setNewPasswordConfirm,
  ] = useInput('');

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('변경완료');
  }

  return (
    <BasicCard
      type="form"
      icon={<UserPasswordIcon />}
      title="비밀번호 변경"
      onSubmit={onSubmit}
      errorMessage={errorMessage}
    >
      <InputGroup>
        <LabelInput
          label="현재 비밀번호"
          type="password"
          value={currentPassword}
          onChange={onChangeCurrentPassword}
          placeholder="현재 비밀번호를 입력하세요."
        />
        <LabelInput
          label="새 비밀번호"
          type="password"
          value={newPassword}
          onChange={onChangeNewPassword}
          placeholder="새 비밀번호를 입력하세요."
        />
        <LabelInput
          label="새 비밀번호 확인"
          type="password"
          value={newPasswordConfirm}
          onChange={onChangeNewPasswordConfirm}
          placeholder="새 비밀번호를 다시 입력하세요."
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

export default UserPasswordCard;
