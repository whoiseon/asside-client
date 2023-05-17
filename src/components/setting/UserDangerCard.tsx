import UserEmailIcon from '@/assets/vectors/email-icon.svg';
import BasicCard from '@/components/base/BasicCard';
import { FormEvent, useState } from 'react';
import styled from '@emotion/styled';
import { useInput } from '@/lib/hooks/useInput';
import Input from '@/components/system/Input';
import { themedPalette } from '@/styles/palette';
import { media } from '@/lib/media';

function UserDangerCard() {
  const [confirm, onChangeConfirm, setConfirm] = useInput('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('변경완료');
  };

  return (
    <BasicCard
      type="form"
      icon={<UserEmailIcon />}
      title="계정 삭제"
      onSubmit={onSubmit}
      errorMessage={errorMessage}
      description="프로젝트, 팀, 스터디 등 모든 데이터가 삭제됩니다."
      buttonText="삭제"
      isDanger
    >
      <InputGroup>
        <Description>
          <p>삭제 확인</p>
          <p>계정 삭제를 원하시면 아래 문구를 입력하세요</p>
          <div>
            <i>내 계정을 삭제하고 싶습니다</i>
          </div>
        </Description>
        <Input
          type="text"
          value={confirm}
          onChange={onChangeConfirm}
          placeholder={'내 계정을 삭제하고 싶습니다'}
          mode="danger"
        />
      </InputGroup>
    </BasicCard>
  );
}

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p:last-of-type {
    font-size: 14px;
    color: ${themedPalette.text3};

    ${media.mobile} {
      font-size: 16px;
    }
  }

  div {
    margin-top: 8px;
    i {
      font-size: 14px;
      display: inline-block;
      padding: 6px 8px;
      border-radius: 4px;
      font-style: normal;
      color: ${themedPalette.destructive1};
      border: 1px solid ${themedPalette.border3};
      background-color: ${themedPalette.bg_element2};

      ${media.mobile} {
        font-size: 16px;
      }
    }
  }
`;

export default UserDangerCard;
