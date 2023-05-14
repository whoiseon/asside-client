import UserProfileIcon from '@/assets/vectors/user-profile-icon.svg';
import DefaultProfile from '@/components/system/DefaultProfile';
import Button from '@/components/system/Button';
import LabelInput from '@/components/system/LabelInput';
import BasicCard from '@/components/base/BasicCard';
import useMyAccount from '@/lib/hooks/useMyAccount';
import useUserProfile from '@/lib/hooks/useUserProfile';
import styled from '@emotion/styled';
import { themedPalette } from '@/styles/palette';
import { useInput } from '@/lib/hooks/useInput';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUserProfile } from '@/lib/apis/user';
import { useRouter } from 'next/router';

function UserProfileCard() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { data: myAccount } = useMyAccount();
  const { data: userData } = useUserProfile(myAccount?.username as string);

  const [profile, setProfile] = useState<string>('');
  const [username, onChangeUsername, setUsername] = useInput('');
  const [description, onChangeDescription, setDescription] = useInput('');

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const changedCheck = () => {
    if (username !== userData?.username) {
      return true;
    }
    if (description !== userData?.description) {
      return true;
    }
    return false;
  };

  const { mutate } = useMutation({
    mutationFn: updateUserProfile,
    onMutate: () => {
      setErrorMessage(null);
    },
    onSuccess: () => {
      console.log('변경완료');
      queryClient.refetchQueries(['user', username]);
      queryClient.refetchQueries(['me']).then(() => {
        router.push(`/@${username}`);
      });
    },
  });

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!changedCheck()) {
        setErrorMessage('변경된 사항이 없습니다!');
        return;
      }

      await mutate({
        username: userData?.username === username ? undefined : username,
        description:
          userData?.description === description ? undefined : description,
      });

      console.log('meData', myAccount);
      console.log('updated meData', queryClient.getQueryData(['me']));
    },
    [username, description],
  );

  useEffect(() => {
    setUsername((userData?.username as string) || '');
    setDescription((userData?.description as string) || '');
  }, [userData]);

  return (
    <BasicCard
      type="form"
      icon={<UserProfileIcon />}
      title="프로필"
      onSubmit={onSubmit}
      errorMessage={errorMessage}
    >
      <MyProfile>
        {userData?.profile ? <DefaultProfile /> : <DefaultProfile />}
        <MyAccount>
          <h2>{userData?.username}</h2>
          <p>{userData?.email}</p>
        </MyAccount>
      </MyProfile>
      <ActionBox>
        <Button layout="fullWidth" size="small" variant="grey" type="button">
          프로필 사진 변경
        </Button>
      </ActionBox>
      <InputGroup>
        <LabelInput
          label="이름 또는 닉네임"
          value={username}
          onChange={onChangeUsername}
        />
        <LabelInput
          label="자기소개"
          value={description}
          onChange={onChangeDescription}
        />
      </InputGroup>
    </BasicCard>
  );
}

const MyProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const MyAccount = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  p,
  h2 {
    margin: 0;
  }

  h2 {
    font-size: 18px;
  }

  p {
    color: ${themedPalette.text3};
  }
`;

const ActionBox = styled.div`
  margin-top: 24px;
  button {
    background-color: ${themedPalette.bg_element3};
    border: 1px solid ${themedPalette.border3};
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;

export default UserProfileCard;
