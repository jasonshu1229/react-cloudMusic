import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './modules/counter';

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

// 方法一：获取getState的返回值类型 是一个函数类型
// const state = store.getState();
// export type IRootState = typeof state;

// 方法二：获取getState的返回值类型 是一个函数类型
type GetStateFnType = typeof store.getState;
export type IRootState = ReturnType<GetStateFnType>;

export type DispatchType = typeof store.dispatch;

export default store;
