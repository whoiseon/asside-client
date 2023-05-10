import styled from '@emotion/styled';
import PageTitle from '@/components/base/PageTitle';
import ConfigIcon from '@/assets/vectors/config-icon.svg';
import useMyAccount from '@/lib/hooks/useMyAccount';
import useUserProfile from '@/lib/hooks/useUserProfile';
import UserProfileCard from '@/components/setting/UserProfileCard';

function UserSetting() {
  const { data: myAccount } = useMyAccount();
  const { data: userData } = useUserProfile(myAccount?.username as string);

  return (
    <Block>
      <Title>
        <PageTitle title="개인 설정" icon={<ConfigIcon />} />
      </Title>
      <SettingBox>
        <Profile>
          <UserProfileCard />
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

const SettingBox = styled.div`
  padding: 16px;
`;

export default UserSetting;
