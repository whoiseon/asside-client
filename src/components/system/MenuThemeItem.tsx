import styled from '@emotion/styled';
import ThemeIcon from '@/assets/vectors/theme-icon.svg';
import RightArrowIcon from '@/assets/vectors/right-arrow-icon.svg';
import { themedPalette } from '@/styles/palette';
import { useToggleTheme } from '@/lib/hooks/useToggleTheme';
import useToggle from '@/lib/hooks/useToggle';
import DarkModeIcon from '@/assets/vectors/dark.svg';
import LightModeIcon from '@/assets/vectors/light.svg';
import { css } from '@emotion/react';

const themeMaps = {
  dark: {
    icon: <DarkModeIcon />,
    text: '어두운 테마',
  },
  light: {
    icon: <LightModeIcon />,
    text: '밝은 테마',
  },
};

function MenuThemeItem() {
  const [theme, toggleTheme] = useToggleTheme();
  const [openSelect, onToggleSelectBox] = useToggle(false);
  const { icon, text } = themeMaps[theme];
  const isDark = theme === 'dark';

  return (
    <Block>
      <StyledTheme>
        <LeftBox>
          {icon}
          {text}
        </LeftBox>
        <RightBox openSelect={openSelect}>
          <ThemeButton onClick={toggleTheme} isDark={isDark}>
            <div className="circle"></div>
          </ThemeButton>
        </RightBox>
      </StyledTheme>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 8px;
`;

const StyledTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  background: none;
  border: none;
  border-radius: 4px;
  color: ${themedPalette.text1};
  font-size: 16px;
  min-height: 40px;
  width: 100%;
  transition: background-color 0.125s ease-in-out;
`;

const LeftBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.2s ease-in-out;
  svg {
    width: 20px;
    color: ${themedPalette.text3};
  }
`;

const RightBox = styled.div<{ openSelect: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 100%;
  transition: all 0.125s ease-in-out;
`;

const ThemeButton = styled.button<{ isDark: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0;
  margin: 0;
  position: relative;
  min-width: 48px;
  min-height: 24px;
  border-radius: 100px;
  background-color: ${themedPalette.bg_element1};
  border: 1.8px solid ${themedPalette.border4};
  transition: all 0.125s ease-in-out;

  div {
    &.circle {
      width: 23px;
      height: 23px;
      border-radius: 50%;
      position: absolute;
      top: -1px;
      left: 0;
      background-color: ${themedPalette.border4};
    }
  }

  ${({ isDark }) =>
    isDark &&
    css`
      border: 1.8px solid ${themedPalette.primary1};
      div {
        &.circle {
          left: 24px;
          background-color: ${themedPalette.primary1};
        }
      }
    `}
`;

const RightText = styled.span`
  font-size: 14px;
  color: ${themedPalette.text4};
`;

export default MenuThemeItem;
