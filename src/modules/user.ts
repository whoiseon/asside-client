import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '@/modules/types';
import { RootState } from '@/modules/core/reducers';

const initialState: UserState = {
  id: null,
  username: '',
  email: '',
  isLoggedIn: false,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    clearUser(state) {
      state.id = null;
      state.username = '';
      state.email = '';
      state.isLoggedIn = false;
    },
  },
});

const userIdSelector = (state: RootState) => state.user.id;

export const { setUser, clearUser } = user.actions;

export default user;
