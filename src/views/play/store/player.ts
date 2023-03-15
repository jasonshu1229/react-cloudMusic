import { ILyric } from './../../../../.history/src/utils/parse-lyric_20230315163442';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSongDetail, getSongLyric } from '../service/player';
import { parseLyric } from '@/utils/parse-lyric';

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
      // 2. 将歌词解析成一个个对象
      const lyrics = parseLyric(lyricString);
      // 3. 将歌词放到state中
      dispatch(changeLyricsAction(lyrics));
    });
  }
);

interface IPlayerState {
  currentSong: any;
  lyrics: ILyric[];
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
