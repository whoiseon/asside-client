import styled from '@emotion/styled';
import DefaultProfile from '@/components/system/DefaultProfile';
import { themedPalette } from '@/styles/palette';
import Button from '@/components/system/Button';
import useUserProfile from '@/lib/hooks/useUserProfile';
import { useRouter } from 'next/router';
import { CSSProperties, useEffect, useMemo, useState } from 'react';
import EmptyList from '@/components/system/EmptyList';

const tabMaps = [
  { name: '프로젝트', tab: 'projects' },
  { name: '팀', tab: 'teams' },
  { name: '스터디', tab: 'studyGroups' },
];

function UserProfile() {
  const router = useRouter();
  const {
    query: { username },
  } = router;
  const [nowTab, setNowTab] = useState<string>(
    (router.query.tab as string) ?? 'projects',
  );

  const { data: userData } = useUserProfile(username as string);

  const renderedTab = useMemo(() => {
    const activeStyle: CSSProperties = {
      background: themedPalette.bg_element1,
      color: themedPalette.text2,
    };

    return tabMaps.map((tab) => {
      return (
        <Button
          key={tab.name}
          layout="inline"
          size="small"
          variant="text"
          href={`${router.asPath.split('?')[0]}?tab=${tab.tab}`}
          style={nowTab === tab.tab ? activeStyle : {}}
        >
          {tab.name}
        </Button>
      );
    });
  }, [nowTab, router.asPath]);

  const renderedEmptyContent = useMemo(() => {
    switch (nowTab) {
      case 'projects':
        return <EmptyList message="진행중인 프로젝트가 없습니다." />;
      case 'teams':
        return <EmptyList message="소속된 팀이 없습니다." />;
      case 'studyGroups':
        return <EmptyList message="소속된 스터디가 없습니다." />;
      default:
        return <EmptyList message="진행중인 프로젝트가 없습니다." />;
    }
  }, [nowTab]);

  const renderedContent = useMemo(() => {
    if (!userData) return renderedEmptyContent;

    switch (nowTab) {
      case 'projects':
        return userData['projects'].length <= 0
          ? renderedEmptyContent
          : userData['projects'].map((project) => {
              return <div key={project.id}>{project.name}</div>;
            });
      case 'teams':
        return userData['teams'].length <= 0
          ? renderedEmptyContent
          : userData['teams'].map((team) => {
              return <div key={team.id}>{team.name}</div>;
            });
      case 'studyGroups':
        return userData['studyGroups'].length <= 0
          ? renderedEmptyContent
          : userData['studyGroups'].map((studyGroup) => {
              return <div key={studyGroup.id}>{studyGroup.name}</div>;
            });
      default:
        return renderedEmptyContent;
    }
  }, [nowTab, userData]);

  useEffect(() => {
    setNowTab((router.query.tab as string) ?? 'projects');
  }, [router.query.tab]);

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
        <ActionBox>
          <Button
            layout="fullWidth"
            variant="grey"
            size="small"
            href="/setting"
          >
            프로필 수정하기
          </Button>
        </ActionBox>
      </ProfileBox>
      <ContentBox>
        <TabList>{renderedTab}</TabList>
        {renderedContent}
      </ContentBox>
    </Block>
  );
}

const Block = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  gap: 32px;
  flex: 1;
`;

const ProfileBox = styled.article`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 16px;
`;

const ContentBox = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 16px;
`;

const TabList = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 16px;
  padding-left: 16px;
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
  color: ${themedPalette.text2};
  margin: 16px 0 0;
`;

const ActionBox = styled.div`
  margin-top: 16px;
  a {
    font-size: 14px;
    font-weight: 600;
  }
`;

export default UserProfile;
