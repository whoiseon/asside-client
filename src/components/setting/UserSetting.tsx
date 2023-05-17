import styled from '@emotion/styled';
import PageTitle from '@/components/base/PageTitle';
import ConfigIcon from '@/assets/vectors/config-icon.svg';
import useMyAccount from '@/lib/hooks/useMyAccount';
import useUserProfile from '@/lib/hooks/useUserProfile';
import UserProfileCard from '@/components/setting/UserProfileCard';
import UserPasswordCard from '@/components/setting/UserPasswordCard';
import UserEmailCard from '@/components/setting/UserEmailCard';
import UserDangerCard from '@/components/setting/UserDangerCard';

function UserSetting() {
  const { data: myAccount } = useMyAccount();
  const { data: userData } = useUserProfile(myAccount?.username as string);

  return (
    <Block>
      <Title>
        <PageTitle title="개인 설정" icon={<ConfigIcon />} />
      </Title>
      <SettingBox>
        <UserProfileCard />
        <UserEmailCard />
        <UserPasswordCard />
        <UserDangerCard />
      </SettingBox>
    </Block>
  );
}

const Block = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  gap: 16px;
  flex: 1;
`;

const Title = styled.div`
  padding-left: 16px;
  padding-right: 16px;
`;

const SettingBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 16px 16px 48px;
`;

export default UserSetting;
