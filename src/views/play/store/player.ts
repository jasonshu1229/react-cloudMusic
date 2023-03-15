import { createSlice } from '@reduxjs/toolkit';

interface ICurrentSong {
  id: number;
  name: string;
  ar: Ar[];
  al: Al;
  dt: number;
  publishTime: number;
}

interface Ar {
  id: number;
  name: string;
  tns: any[];
  alias: any[];
}

interface Al {
  id: number;
  name: string;
  picUrl: string;
  tns: any[];
  pic_str: string;
  pic: number;
}

interface IPlayerState {
  currentSong: ICurrentSong;
}

const initialState: IPlayerState = {
  currentSong: {
    name: 'Melody',
    id: 191179, // 150520
    // t: 0,
    ar: [
      {
        id: 5196,
        name: '陶喆',
        tns: [],
        alias: []
      }
    ],
    // alia: [],
    // pop: 100,
    // st: 0,
    // rt: '600902000009577041',
    // fee: 1,
    // v: 27,
    // crbt: null,
    // cf: '',
    al: {
      id: 15189,
      name: 'Ultrasound 乐之路 1997-2003',
      picUrl:
        'https://p2.music.126.net/4uHOznBK63ZOa9vft8qjxQ==/109951164124485287.jpg',
      tns: [],
      pic_str: '109951164124485287',
      pic: 109951164124485280
    },
    dt: 269026,
    // h: {
    //   br: 320001,
    //   fid: 0,
    //   size: 10763538,
    //   vd: -43983,
    //   sr: 44100
    // },
    // m: null,
    // l: {
    //   br: 128001,
    //   fid: 0,
    //   size: 4305441,
    //   vd: -39588,
    //   sr: 44100
    // },
    // sq: {
    //   br: 809182,
    //   fid: 0,
    //   size: 27211467,
    //   vd: -44042,
    //   sr: 44100
    // },
    publishTime: 1059667200000
  }
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {}
});

export default playerSlice.reducer;
