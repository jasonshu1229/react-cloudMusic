import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getBanners, getHotRecommend, getNewAlbum } from '../service/recommend';

export const fetchRecommendData = createAsyncThunk(
  'recommendData',
  (_, { dispatch }) => {
    getBanners().then((res) => {
      dispatch(changeBanners(res.banners));
    });
    getHotRecommend(8).then((res) => {
      dispatch(changeHotRecommendSongList(res.result));
    });
    getNewAlbum().then((res) => {
      dispatch(changeNewAlbumList(res.albums));
    });
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
