import styled from '@emotion/styled';
import { themedPalette } from '@/styles/palette';
import Input from '@/components/system/Input';
import SearchIcon from '@/assets/vectors/search-icon.svg';
import { useState, MouseEvent, useEffect, useMemo } from 'react';
import MenuItem from '@/components/system/MenuItem';
import HomeIcon from '@/assets/vectors/home-icon.svg';
import ProjectIcon from '@/assets/vectors/project-icon.svg';
import StudyIcon from '@/assets/vectors/study-icon.svg';
import TeamIcon from '@/assets/vectors/team-icon.svg';
import useMyAccount from '@/lib/hooks/useMyAccount';
import UserProfileIcon from '@/assets/vectors/user-profile-icon.svg';
import LogOutIcon from '@/assets/vectors/logout-icon.svg';
import SettingIcon from '@/assets/vectors/config-icon.svg';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logOut } from '@/lib/apis/auth';
import { useRouter } from 'next/router';
import { queryKey } from '@/lib/queryKey';
import MenuThemeItem from '@/components/system/MenuThemeItem';

interface Props {
  onToggleMenu: () => void;
}

const commonMenuLinks = [
  { name: '홈', link: '/', icon: <HomeIcon /> },
  { name: '프로젝트', link: '/project', icon: <ProjectIcon /> },
  { name: '스터디', link: '/study', icon: <StudyIcon /> },
  { name: '팀', link: '/team', icon: <TeamIcon /> },
];

function MobileMenu({ onToggleMenu }: Props) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data: userData } = useMyAccount();
  const [focused, setFocused] = useState<boolean>(false);
  const onFocus = () => {
    setFocused(true);
  };
  const onBlur = () => {
    setFocused(false);
  };

  const { mutate } = useMutation({
    mutationFn: logOut,
    onSuccess: () => {
      onToggleMenu();
      router.push('/');
      queryClient.setQueryData([queryKey.CURRENT_USER], () => null);
    },
  });

  const renderedCommonMenu = useMemo(() => {
    return commonMenuLinks.map((item) => {
      return (
        <MenuItem
          key={item.name}
          name={item.name}
          icon={item.icon}
          link={item.link}
          onClose={onToggleMenu}
        />
      );
    });
  }, [commonMenuLinks]);

  const onLogout = () => {
    mutate();
  };

  return (
    <StyledMenu>
      <SearchGroup focused={focused}>
        <SearchIcon />
        <Input
          mode="search"
          placeholder="프로젝트나 스터디를 검색해보세요"
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </SearchGroup>
      <MenuGroup>
        <List>{renderedCommonMenu}</List>
      </MenuGroup>
      {userData ? (
        <MenuGroup>
          <Title>
            <p>내 정보</p>
          </Title>
          <List>
            <MenuItem
              name="프로필"
              link={`@${userData.username}`}
              icon={<UserProfileIcon />}
              rightText={userData.username}
              onClose={onToggleMenu}
              hasArrow
            />
            <MenuItem
              name="개인 설정"
              link="/setting"
              icon={<SettingIcon />}
              onClose={onToggleMenu}
              hasArrow
            />
            <MenuItem
              name="로그아웃"
              link="/logout"
              icon={<LogOutIcon />}
              onClick={onLogout}
              onClose={onToggleMenu}
              hasArrow
            />
          </List>
        </MenuGroup>
      ) : null}
      <MenuGroup>
        <Title>
          <p>일반</p>
        </Title>
        <MenuThemeItem />
      </MenuGroup>
    </StyledMenu>
  );
}

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: ${themedPalette.bg_element1};
  width: 100vw;
  height: calc(100vh - 60px);
  z-index: 600;
  padding-bottom: 32px;
  inset: 60px 0px 0px;
  overflow: hidden auto;
  overscroll-behavior-y: contain;
`;

const SearchGroup = styled.div<{ focused: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px 16px 8px;
  position: relative;
  input {
    width: 100%;
    font-size: 14px;
    padding-left: 40px;
  }
  svg {
    position: absolute;
    left: 24px;
    width: 24px;
    transition: color 0.125s ease-in-out;
    color: ${({ focused }) =>
      focused ? themedPalette.primary1 : themedPalette.text4};
  }
`;

const MenuGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Title = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  p {
    margin: 0 0 8px;
    font-size: 14px;
    color: ${themedPalette.text3};
  }
`;

export default MobileMenu;
