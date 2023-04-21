import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DarkModeState } from '@/modules/core/types';

const initialState: DarkModeState = {
  theme: 'default',
  systemTheme: 'not-ready',
};

const darkMode = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    enableDarkMode(state) {
      state.theme = 'dark';
    },
    enableLightMode(state) {
      state.theme = 'light';
    },
    setSystemTheme(state, action: PayloadAction<'dark' | 'light'>) {
      state.systemTheme = action.payload;
    },
  },
});

export const { enableDarkMode, enableLightMode, setSystemTheme } =
  darkMode.actions;

export default darkMode;
