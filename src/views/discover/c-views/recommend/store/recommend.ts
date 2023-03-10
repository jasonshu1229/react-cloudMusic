import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getBanners } from '../service/recommend';

export const fetchRecommendDataAction = createAsyncThunk(
  'banners',
  async (_, { dispatch }) => {
    const result = await getBanners();
    dispatch(changeBanners(result.banners));
  }
);

interface IBannerListData {
  imageUrl: string;
  targetId: number;
  adid: any;
  targetType: number;
  titleColor: string;
  typeTitle: string;
  url: string;
}

interface IRecommendState {
  banners: IBannerListData[];
}

const initialState: IRecommendState = {
  banners: []
};

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBanners(state, { payload }) {
      console.log(payload);
      state.banners = payload;
    }
  }
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchRecommendDataAction.pending, () => {
  //       console.log('pending');
  //     })
  //     .addCase(fetchRecommendDataAction.fulfilled, (state, { payload }) => {
  //       state.banners = payload;
  //     })
  //     .addCase(fetchRecommendDataAction.rejected, () => {
  //       console.log('rejected');
  //     });
  // }
});

export const { changeBanners } = recommendSlice.actions;
export default recommendSlice.reducer;
