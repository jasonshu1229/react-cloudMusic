import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSongDetail, getSongLyric } from '../service/player';

export const fetchCurrentSongAction = createAsyncThunk(
  'currentSong',
  (id: number, { dispatch }) => {
    getSongDetail(id).then((res) => {
      if (!res.songs.length) return;
      const song = res.songs[0];

      dispatch(changeCurrentSongAction(song));
    });

    getSongLyric(id).then((res) => {
      // 1. 获取歌词的字符串
      const lyricString = res.lrc.lyric;
      console.log(res);
      console.log(lyricString);
      // 2. 将歌词解析成一个个对象
      // const lyrics =
      // dispatch(changeLyricsAction(lyricString));
    });
  }
);

interface IPlayerState {
  currentSong: any;
  lyrics: string[];
}

const initialState: IPlayerState = {
  currentSong: {},
  lyrics: []
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload;
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload;
    }
  }
});

export const { changeCurrentSongAction, changeLyricsAction } =
  playerSlice.actions;
export default playerSlice.reducer;
