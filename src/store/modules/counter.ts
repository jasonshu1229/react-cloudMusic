import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  count: number;
  message: string;
  height: 188;
  direction: 'left' | 'right';
}

const initialState: IInitialState = {
  count: 100,
  message: 'hello redux',
  height: 188,
  direction: 'left'
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeMessageAction(state, { payload }: PayloadAction<string>) {
      state.message = payload;
    }
  }
});

export const { changeMessageAction } = counterSlice.actions;
export default counterSlice.reducer;
