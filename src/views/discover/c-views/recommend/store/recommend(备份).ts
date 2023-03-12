import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getBanners, getHotRecommend, getNewAlbum } from '../service/recommend';

export const fetchRecommendDataAction = createAsyncThunk(
  'banners',
  async (_, { dispatch }) => {
    const result = await getBanners();
    dispatch(changeBanners(result.banners));
  }
);

export const fetchHotRecommendDataAction = createAsyncThunk(
  'hotRecommend',
  async (_, { dispatch }) => {
    const result = await getHotRecommend(8);
    dispatch(changeHotRecommendSongList(result.result));
  }
);

export const fetchNewAblbumAction = createAsyncThunk(
  'newAlbum',
  async (_, { dispatch }) => {
    const result = await getNewAlbum();
    dispatch(changeNewAlbumList(result.albums));
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

interface IHotRecommendSongList {
  id: number;
  name: string;
  picUrl: string;
  playCount: number;
}

interface INewAlbumList {
  id: number;
  name: string;
  picUrl: string;
  artist: any;
}

interface IRecommendState {
  banners: IBannerListData[];
  hotRecommendSongList: IHotRecommendSongList[];
  newAlbumList: INewAlbumList[];
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommendSongList: [],
  newAlbumList: []
};

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBanners(state, { payload }) {
      console.log('banners', payload);
      state.banners = payload;
    },
    changeHotRecommendSongList(state, { payload }) {
      console.log('hotRecommendSongList', payload);
      state.hotRecommendSongList = payload;
    },
    changeNewAlbumList(state, { payload }) {
      console.log('newAlbumList', payload);
      state.newAlbumList = payload;
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

export const { changeBanners, changeHotRecommendSongList, changeNewAlbumList } =
  recommendSlice.actions;
export default recommendSlice.reducer;
