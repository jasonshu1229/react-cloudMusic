import React, { memo, FC, useRef, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Slider } from 'antd';

import {
  PlayerBarWrapper,
  BarControl,
  BarPlayerInfo,
  BarOperator
} from './style';
import { shallowAppEqual, useAppSelector } from '@/store/hooks';
import { formatImgUrlSize, formatTime } from '@/utils/format';
import { getSongUrl } from '../service/player';

interface IProps {
  children?: ReactNode;
}

const AppPlayerBar: FC<IProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const { currentSong } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong
    }),
    shallowAppEqual
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const songUrl = await getSongUrl(currentSong.id);
        audioRef.current!.src = songUrl.data[0].url;
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
    setDuration(currentSong.dt);
  }, [currentSong]);

  const handlePlayClick = () => {
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch((err) => console.log(err));

    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const currentTime = audioRef.current!.currentTime * 1000;
    setCurrentTime(currentTime);

    const progress = (currentTime / duration) * 100;
    setProgress(progress);
  };

  return (
    <PlayerBarWrapper className="sprite_playbar">
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
              src={formatImgUrlSize(currentSong.al.picUrl, 34)}
              className="image"
            />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{currentSong?.ar[0].name}</span>
            </div>
            <div className="progress">
              <Slider
                step={0.4}
                value={progress}
                tooltip={{ formatter: null }}
              />
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator>
          <div className="left">
            <button className="btn pip" />
            <button className="btn sprite_playbar favor" />
            <button className="btn sprite_playbar share" />
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume" />
            <button className="btn sprite_playbar loop" />
            <button className="btn sprite_playbar playlist" />
          </div>
        </BarOperator>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} />
    </PlayerBarWrapper>
  );
};

export default memo(AppPlayerBar);
