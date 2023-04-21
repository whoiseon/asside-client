import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSystemTheme } from '@/modules/darkMode';
import { RootState } from '@/modules/core/reducers';

export function useThemeEffect() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.darkMode.theme);

  useEffect(() => {
    if (window !== undefined) {
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      dispatch(setSystemTheme(systemPrefersDark ? 'dark' : 'light'));
    }
  }, [setSystemTheme]);

  useEffect(() => {
    if (theme !== 'default') {
      document.body.dataset.theme = theme;
    }
  }, [theme]);
}
