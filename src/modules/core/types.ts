export interface ActionProps {
  type: string;
  payload: string;
}

export interface DarkModeState {
  theme: 'dark' | 'light' | 'default';
  systemTheme: 'dark' | 'light' | 'not-ready';
}

export interface ReducerStates {
  darkMode: DarkModeState;
}
