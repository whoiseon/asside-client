import styled from '@emotion/styled';
import { themedPalette } from '@/styles/palette';
import Input from '@/components/system/Input';
import SearchIcon from '@/assets/vectors/search-icon.svg';
import { useState } from 'react';

const commonMenuLinks = [
  { name: '홈', link: '/', icon: null },
  { name: '프로젝트', link: '/project', icon: null },
  { name: '스터디', link: '/study', icon: null },
  { name: '팀', link: '/team', icon: null },
];

function MobileMenu() {
  const [focused, setFocused] = useState<boolean>(false);
  const onFocus = () => {
    setFocused(true);
  };
  const onBlur = () => {
    setFocused(false);
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
        <List>123</List>
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
  padding: 16px;
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
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  p {
    font-size: 14px;
    color: ${themedPalette.text2};
  }
`;

export default MobileMenu;
