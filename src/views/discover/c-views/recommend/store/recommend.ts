import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  getArtistList,
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlayListDetail
} from '../service/recommend';

export const fetchRecommendDataAction = createAsyncThunk(
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
    getArtistList().then((res) => {
      dispatch(changeArtistList(res.artists));
    });
  }
);

const rankListIds = [19723756, 3779629, 2884035];
export const fetchRankingListDataAction = createAsyncThunk(
  'playListData',
  (_, { dispatch }) => {
    // 获取榜单的数据
    // 方式一：每一个请求单独处理，一个请求对应一个数组（哪个数据先回来先展示哪个，无顺序要求）
    // for (const id of rankListIds) {
    //   getPlayListDetail(id).then((res) => {
    //     switch (id) {
    //       case 19723756:
    //         console.log('飙升榜的数据', res);
    //         break;
    //       case 3779629:
    //         console.log('新歌榜的数据', res);
    //         break;
    //       case 2884035:
    //         console.log('原创榜的数据', res);
    //         break;
    //     }
    //   });
    // }
    // 方式二：放在一个数组里，按发送请求的顺序展示，等到一起回来时再展示
    const promises: Promise<any>[] = [];
    for (const id of rankListIds) {
      promises.push(getPlayListDetail(id));
    }
    Promise.all(promises).then((res) => {
      const rankList = res.map((item) => item.playlist);
      dispatch(changeRankingList(rankList));
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

export interface IRankList {
  id: number;
  coverImgUrl: string;
  name: string;
  tracks: any;
}

interface IArtistList {
  id: number;
  alias: string[];
  picUrl: string;
  name: string;
}

interface IRecommendState {
  banners: IBannerListData[];
  hotRecommendSongList: IHotRecommendSongList[];
  newAlbumList: INewAlbumList[];
  rankList: IRankList[];
  artistList: IArtistList[];
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommendSongList: [],
  newAlbumList: [],
  rankList: [],
  artistList: []
};

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBanners(state, { payload }) {
      // console.log('banners', payload);
      state.banners = payload;
    },
    changeHotRecommendSongList(state, { payload }) {
      // console.log('hotRecommendSongList', payload);
      state.hotRecommendSongList = payload;
    },
    changeNewAlbumList(state, { payload }) {
      // console.log('newAlbumList', payload);
      state.newAlbumList = payload;
    },
    changeRankingList(state, { payload }) {
      state.rankList = payload;
    },
    changeArtistList(state, { payload }) {
      state.artistList = payload;
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

export const {
  changeBanners,
  changeHotRecommendSongList,
  changeNewAlbumList,
  changeRankingList,
  changeArtistList
} = recommendSlice.actions;
export default recommendSlice.reducer;
