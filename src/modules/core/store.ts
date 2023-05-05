import { AnyAction, configureStore, Reducer } from '@reduxjs/toolkit';
import rootReducer from '@/modules/core/reducers';
import { ReducerStates } from '@/modules/types';
import { createWrapper } from 'next-redux-wrapper';

const store = () => {
  return configureStore({
    reducer: rootReducer as Reducer<ReducerStates, AnyAction>,
    devTools: true,
  });
};

export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(store);
