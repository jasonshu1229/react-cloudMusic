import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    message: 'hello redux',
    height: 188
  },
  reducers: {}
});

export default counterSlice.reducer;
