import { useTheme } from '@/lib/hooks/useTheme';
import storage from '@/lib/storage';
import { useDispatch, useSelector } from 'react-redux';
import { enableDarkMode, enableLightMode } from '@/modules/darkMode';

export function useToggleTheme() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const saveStorage = (value: 'light' | 'dark') => {
    storage.setItem('theme', value); // For Client side rendering
    document.cookie = `theme=${value}; path=/;`; // For Server side rendering
  };

  const toggle = () => {
    if (!theme) return;
    if (theme === 'dark') {
      dispatch(enableLightMode());
      saveStorage('light');
    } else {
      dispatch(enableDarkMode());
      saveStorage('dark');
    }
  };

  return [theme, toggle] as const;
}
