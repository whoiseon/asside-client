export interface ActionProps {
  type: string;
  payload: string;
}

export interface DarkModeState {
  theme: 'dark' | 'light' | 'default';
  systemTheme: 'dark' | 'light' | 'not-ready';
}

export interface UserState {
  id: number | null;
  username: string;
  email: string;
  isLoggedIn: boolean;
}

export interface ReducerStates {
  darkMode: DarkModeState;
  user: UserState;
}
