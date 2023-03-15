import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import { getSongDetail, getSongLyric } from '../service/player';
import { ILyric, parseLyric } from '@/utils/parse-lyric';
import { IRootState } from '@/store';

interface IThunkState {
  state: IRootState;
}

export const fetchCurrentSongAction = createAsyncThunk<
  void,
  number,
  IThunkState
>('currentSong', (id, { dispatch, getState }) => {
  // 准备播放某一首歌时，分成两种情况
  // 1. 从列表尝试是否可以获取到这首歌
  const playSongList = getState().player.playSongList;
  const findIndex = playSongList.findIndex((item) => item.id === id);
  if (findIndex === -1) {
    // 在播放列表中没有找到当前准备播放的歌曲信息
    getSongDetail(id).then((res) => {
      // 1. 获取song
      if (!res.songs.length) return;
      const song = res.songs[0];

      // 2. 将song放到currentSong中
      const newPlayList = [...playSongList];
      newPlayList.push(song);
      dispatch(changePlayListAction(newPlayList));
      dispatch(changeCurrentSongAction(song));
      dispatch(changePlaySongIndexAction(newPlayList.length - 1));
    });
  } else {
    // 在播放列表中找到了准备播放的歌曲
    const song = playSongList[findIndex];
    dispatch(changeCurrentSongAction(song));
    dispatch(changePlaySongIndexAction(findIndex));
  }

  // 2. 获取正在播放歌曲的歌词数据
  getSongLyric(id).then((res) => {
    // 1. 获取歌词的字符串
    const lyricString = res.lrc.lyric;
    // 2. 将歌词解析成一个个对象
    const lyrics = parseLyric(lyricString);
    // 3. 将歌词放到state中
    dispatch(changeLyricsAction(lyrics));
  });
});

export const changeCurrentMusicAcion = createAsyncThunk<
  void,
  boolean,
  IThunkState
>('changeMusic', (isNext, { dispatch, getState }) => {
  // 1. 获取 state 中的数据
  const player = getState().player;
  const playSongIndex = player.playSongIndex;
  const playSongList = player.playSongList;
  const playMode = player.playMode;

  // 2. 根据不同的播放模式计算下一首歌曲的索引
  let newIndex = playSongIndex; // 保存即将要播放歌曲的索引
  if (playMode === 1) {
    // 随机播放
    newIndex = Math.floor(Math.random() * playSongList.length);
  } else {
    // 单曲循环和顺序播放（都是跳到下一首或上一首）
    newIndex = isNext ? playSongIndex + 1 : playSongIndex - 1;
    if (newIndex > playSongList.length - 1) newIndex = 0;
    if (newIndex < 0) newIndex = playSongList.length - 1;
  }

  // 3. 获取当前的歌曲
  const currentPlaySong = playSongList[newIndex];
  dispatch(changeCurrentSongAction(currentPlaySong));
  dispatch(changePlaySongIndexAction(newIndex));
});

export const changeCurrentLyricsAction = createAsyncThunk<
  void,
  boolean,
  IThunkState
>('changeLyrics', (isNext, { dispatch, getState }) => {
  const player = getState().player;
  const currentSong = player.currentSong;
  getSongLyric(currentSong.id).then((res) => {
    const lyricString = res.lrc.lyric;
    const lyrics = parseLyric(lyricString);
    dispatch(changeLyricsAction(lyrics));
  });
});

interface IPlayerState {
  currentSong: any;
  lyrics: ILyric[];
  lyricIndex: number;
  playSongList: any[];
  playSongIndex: number;
  playMode: number;
}

const initialState: IPlayerState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,
  playSongList: [
    {
      name: '他不懂',
      id: 28059417,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 6472,
          name: '张杰',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '600907000002790687',
      fee: 8,
      v: 264,
      crbt: null,
      cf: '',
      al: {
        id: 2643348,
        name: '爱，不解释',
        picUrl:
          'https://p1.music.126.net/mW53BkMgGy37I7yVrUg-aQ==/109951163117902077.jpg',
        tns: [],
        pic_str: '109951163117902077',
        pic: 109951163117902080
      },
      dt: 232213,
      h: {
        br: 320000,
        fid: 0,
        size: 9290925,
        vd: 1244,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5574573,
        vd: 3882,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3716397,
        vd: 5649,
        sr: 48000
      },
      sq: {
        br: 748262,
        fid: 0,
        size: 21719554,
        vd: 378,
        sr: 48000
      },
      hr: null,
      a: null,
      cd: '1',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 8704,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 264,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 636011,
      mv: 5779657,
      publishTime: 1387468800007
    },
    {
      name: '你不在',
      id: 1301732871,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 5346,
          name: '王力宏',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: null,
      fee: 8,
      v: 21,
      crbt: null,
      cf: '',
      al: {
        id: 72309025,
        name: '恋爱占星音乐全精选',
        picUrl:
          'https://p2.music.126.net/febOkiCikU5OcjVLqGNLlg==/109951165994484307.jpg',
        tns: [],
        pic_str: '109951165994484307',
        pic: 109951165994484300
      },
      dt: 273906,
      h: {
        br: 320000,
        fid: 0,
        size: 10958933,
        vd: -42273,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6575377,
        vd: -39693,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4383599,
        vd: -38051,
        sr: 44100
      },
      sq: {
        br: 1616574,
        fid: 0,
        size: 55348828,
        vd: -42234,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '02',
      no: 5,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 1,
      s_id: 0,
      mark: 270336,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 21,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mst: 9,
      cp: 7001,
      rtype: 0,
      rurl: null,
      mv: 0,
      publishTime: 1169654400000
    },
    {
      name: '看月亮爬上来',
      id: 191179,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 6472,
          name: '张杰',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '600902000007324091',
      fee: 8,
      v: 187,
      crbt: null,
      cf: '',
      al: {
        id: 19315,
        name: '穿越三部曲',
        picUrl:
          'https://p2.music.126.net/toC85mlrFHuy7JfyPtqkHA==/109951163071273845.jpg',
        tns: [],
        pic_str: '109951163071273845',
        pic: 109951163071273840
      },
      dt: 198413,
      h: {
        br: 320000,
        fid: 0,
        size: 7939178,
        vd: -44406,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 4763524,
        vd: -44406,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3175697,
        vd: -44406,
        sr: 44100
      },
      sq: {
        br: 937120,
        fid: 0,
        size: 23242153,
        vd: -44406,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '1',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 2,
      s_id: 0,
      mark: 8704,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 187,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 5779679,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 636011,
      publishTime: 1257091200007
    }
  ],
  playSongIndex: -1,
  playMode: 0 // 0：顺序播放 1：随机播放 2：单曲循环
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
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload;
    },
    changePlayListAction(state, { payload }) {
      state.playSongList = payload;
    },
    changePlaySongIndexAction(state, { payload }) {
      state.playSongIndex = payload;
    },
    changePlayModeAction(state, { payload }) {
      state.playMode = payload;
    }
  }
});

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction,
  changePlayListAction,
  changePlaySongIndexAction,
  changePlayModeAction
} = playerSlice.actions;
export default playerSlice.reducer;
