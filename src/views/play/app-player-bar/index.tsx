import React, { memo, FC, useRef, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Slider, message } from 'antd';

import {
  PlayerBarWrapper,
  BarControl,
  BarPlayerInfo,
  BarOperator
} from './style';
import { shallowAppEqual, useAppDispatch, useAppSelector } from '@/store/hooks';
import { formatImgUrlSize, formatTime, getSongPlayUrl } from '@/utils/format';
import { changeLyricIndexAction, changePlayModeAction } from '../store/player';

interface IProps {
  children?: ReactNode;
}

const AppPlayerBar: FC<IProps> = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isSliding, setIsSlding] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const dispatch = useAppDispatch();

  const { currentSong, lyrics, lyricIndex, playMode } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      lyrics: state.player.lyrics,
      lyricIndex: state.player.lyricIndex,
      playMode: state.player.playMode
    }),
    shallowAppEqual
  );

  useEffect(() => {
    const songPlayUrl = getSongPlayUrl(currentSong.id);
    audioRef.current!.src = songPlayUrl;

    setDuration(currentSong.dt);
  }, [currentSong]);

  const handlePlayClick = () => {
    // 1. 控制播放器的播放和暂停
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch((err) => console.log(err));

    // 2. 改变isPlaying的状态
    setIsPlaying(!isPlaying);
  };

  const handleChangePlayMode = () => {
    let newPlayMode = playMode + 1;
    if (newPlayMode > 2) newPlayMode = 0;
    dispatch(changePlayModeAction(newPlayMode));
  };

  const handleTimeUpdate = () => {
    // audioRef.current!.currentTime 4.8
    // 1、 获取当前的播放时间
    const currentTime = audioRef.current!.currentTime * 1000;

    // 2. 计算当前的歌曲进度
    if (!isSliding) {
      const progress = (currentTime / duration) * 100;
      setCurrentTime(currentTime);
      setProgress(progress);
    }

    // 3. 根据当前的时间匹配对应的歌词
    // let index = -1; // 最后一句歌词找不到
    let index = lyrics.length - 1;
    for (let i = 0; i < lyrics.length; i++) {
      const lyric = lyrics[i];
      if (lyric.time > currentTime) {
        index = i - 1;
        break;
      }
    }
    if (index === -1 || lyricIndex === index) return;
    dispatch(changeLyricIndexAction(index));

    // 4. 展示对应的歌词
    messageApi.open({
      content: lyrics[index].text,
      key: 'lyric',
      duration: 0
    });
  };

  const handleSliderClickChanged = (value: number) => {
    // 1. 获取点击位置的时间
    const currentTime = (value / 100) * duration;

    // 2. 设置当前播放时间
    audioRef.current!.currentTime = currentTime / 1000;

    // 3. currentTime/progress
    setCurrentTime(currentTime);
    setProgress(value);
    setIsSlding(false);
  };

  const handleSliderChanging = (value: number) => {
    // 目前处于拖拽状态
    setIsSlding(true);
    // 1. 设置 progress
    setProgress(value);

    // 2.获取value对应位置的时间
    const currentTime = (value / 100) * duration;
    setCurrentTime(currentTime);
  };

  return (
    <PlayerBarWrapper className="sprite_playbar">
      {contextHolder}
      <div className="content wrap-v2">
        <BarControl isPlaying={isPlaying}>
          <button className="btn sprite_playbar prev" />
          <button
            className="btn sprite_playbar play"
            onClick={handlePlayClick}
          />
          <button className="btn sprite_playbar next" />
        </BarControl>
        <BarPlayerInfo>
          <Link to="/player">
            <img
              src={formatImgUrlSize(currentSong?.al?.picUrl, 34)}
              className="image"
            />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{currentSong?.ar?.[0]?.name}</span>
            </div>
            <div className="progress">
              <Slider
                step={0.4}
                value={progress}
                tooltip={{ formatter: null }}
                onAfterChange={handleSliderClickChanged}
                onChange={handleSliderChanging}
              />
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator playMode={playMode}>
          <div className="left">
            <button className="btn pip" />
            <button className="btn sprite_playbar favor" />
            <button className="btn sprite_playbar share" />
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume" />
            <button
              className="btn sprite_playbar loop"
              onClick={handleChangePlayMode}
            />
            <button className="btn sprite_playbar playlist" />
          </div>
        </BarOperator>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} />
    </PlayerBarWrapper>
  );
};

export default memo(AppPlayerBar);
