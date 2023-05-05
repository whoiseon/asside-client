import styled from '@emotion/styled';
import DefaultProfile from '@/components/system/DefaultProfile';
import useMyAccount from '@/lib/hooks/useMyAccount';
import { themedPalette } from '@/styles/palette';
import Button from '@/components/system/Button';
import useUserProfile from '@/lib/hooks/useUserProfile';
import { useRouter } from 'next/router';

function UserProfile() {
  const router = useRouter();
  const {
    query: { username },
  } = router;
  const { data: userData } = useUserProfile(username as string);

  return (
    <Block>
      <ProfileBox>
        <Profile>
          <DefaultProfile />
          <Info>
            <Username>{userData?.username}</Username>
            <UserEmail>{userData?.email}</UserEmail>
          </Info>
        </Profile>
        {userData?.description ? (
          <Description>{userData?.description}</Description>
        ) : null}
      </ProfileBox>
      <ActionBox>
        <Button layout="fullWidth" variant="grey" size="small" href="/setting">
          프로필 수정하기
        </Button>
      </ActionBox>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  gap: 16px;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 16px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Username = styled.h3`
  font-size: 18px;
  margin: 0;
  line-height: 1.5;
`;

const UserEmail = styled.p`
  color: ${themedPalette.text3};
  font-size: 16px;
  margin: 0;
`;

const Description = styled.p`
  font-size: 14px;
  color: ${themedPalette.text2};
  padding: 16px 0;
  margin: 0;
`;

const ActionBox = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  margin-top: 8px;
  a {
    font-size: 14px;
    font-weight: 600;
  }
`;

export default UserProfile;
