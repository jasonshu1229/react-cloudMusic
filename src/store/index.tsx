import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './modules/counter';

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

type GetStateFnType = typeof store.getState;
export type IRootState = ReturnType<GetStateFnType>;

export type DispatchType = typeof store.dispatch;

export default store;
