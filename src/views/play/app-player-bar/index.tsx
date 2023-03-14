import React, { memo, FC } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Slider } from 'antd';

import {
  PlayerBarWrapper,
  BarControl,
  BarPlayerInfo,
  BarOperator
} from './style';

interface IProps {
  children?: ReactNode;
}

const AppPlayerBar: FC<IProps> = () => {
  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl>
          <button className="btn sprite_playbar prev" />
          <button className="btn sprite_playbar play" />
          <button className="btn sprite_playbar next" />
        </BarControl>
        <BarPlayerInfo>
          <Link to="/player">
            <img
              src="http://p2.music.126.net/VyGGk8QvpAVPjIzjrQcX8Q==/109951165958893769.jpg?param=34y34"
              className="image"
            />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">怎么了</span>
              <span className="singer-name">周兴哲</span>
            </div>
            <div className="progress">
              <Slider />
              <div className="time">
                <span className="current">00:02</span>
                <span className="divider">/</span>
                <span className="duration">05:21</span>
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
    </PlayerBarWrapper>
  );
};

export default memo(AppPlayerBar);
