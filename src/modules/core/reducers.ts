import { ReducerStates } from '@/modules/types';
import { AnyAction, combineReducers, CombinedState } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import darkMode from '@/modules/darkMode';
import user from '@/modules/user';

const rootReducer = (
  state: ReducerStates,
  action: AnyAction,
): CombinedState<ReducerStates> => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        darkMode: darkMode.reducer,
        user: user.reducer,
      });

      return combineReducer(state, action);
    }
  }
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
