import styled from '@emotion/styled';
import PageTitle from '@/components/base/PageTitle';
import ConfigIcon from '@/assets/vectors/config-icon.svg';
import BasicCard from '@/components/base/BasicCard';
import UserProfileIcon from '@/assets/vectors/user-profile-icon.svg';
import useMyAccount from '@/lib/hooks/useMyAccount';
import useUserProfile from '@/lib/hooks/useUserProfile';
import DefaultProfile from '@/components/system/DefaultProfile';
import { themedPalette } from '@/styles/palette';
import Button from '@/components/system/Button';
import LabelInput from '@/components/system/LabelInput';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import { useInput } from '@/lib/hooks/useInput';

function UserAccount() {
  const { data: myAccount } = useMyAccount();
  const { data: userData } = useUserProfile(myAccount?.username as string);

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

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!changedCheck()) {
        setErrorMessage('변경된 사항이 없습니다!');
        return;
      }

      console.log(username, description);
    },
    [username, description],
  );

  useEffect(() => {
    setUsername((userData?.username as string) || '');
    setDescription((userData?.description as string) || '');
  }, [userData]);

  return (
    <Block>
      <Title>
        <PageTitle title="개인 설정" icon={<ConfigIcon />} />
      </Title>
      <SettingBox>
        <Profile>
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
              <Button
                layout="fullWidth"
                size="small"
                variant="grey"
                type="button"
              >
                프로필 사진 변경
              </Button>
            </ActionBox>
            <Description>
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
            </Description>
          </BasicCard>
        </Profile>
      </SettingBox>
    </Block>
  );
}

const Block = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  flex: 1;
`;

const Title = styled.div`
  padding-left: 16px;
  padding-right: 16px;
`;

const Profile = styled.div``;

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

const SettingBox = styled.div`
  padding: 16px;
`;

const ActionBox = styled.div`
  margin-top: 24px;
  button {
    background-color: ${themedPalette.bg_element3};
    border: 1px solid ${themedPalette.border3};
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;

export default UserAccount;
