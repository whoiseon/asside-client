import { useSelector } from 'react-redux';
import { RootState } from '@/modules/core/reducers';

export function useTheme() {
  const systemThemeState = useSelector(
    (state: RootState) => state.darkMode.systemTheme,
  );
  const themeState = useSelector((state: RootState) => state.darkMode.theme);
  const theme = (() => {
    if (systemThemeState === 'not-ready') return 'light';
    if (themeState !== 'default') return themeState;
    return systemThemeState;
  })();

  return theme;
}
