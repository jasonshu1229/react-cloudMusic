import React, { memo, FC } from 'react';
import type { ReactNode } from 'react';

import { RankingItemWrapper } from './style';

import { IRankList } from '@/views/discover/c-views/recommend/store/recommend';
import { formatImgUrlSize } from '@/utils/format';

interface IProps {
  children?: ReactNode;
  itemData: IRankList;
}

const TopRankingItem: FC<IProps> = (props) => {
  const { itemData } = props;
  const { tracks = [] } = itemData;

  return (
    <RankingItemWrapper>
      <div className="header">
        <div className="image">
          <img src={formatImgUrlSize(itemData.coverImgUrl, 80)} />
          <a href="" className="sprite_cover" />
        </div>
        <div className="info">
          <div className="name">{itemData.name}</div>
          <div>
            <button className="sprite_02 btn play" />
            <button className="sprite_02 btn favor" />
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item: any, index: number) => {
          return (
            <div className="item" key={item.id}>
              <div className="index">{index + 1}</div>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="operator">
                  <button className="btn sprite_02 play" />
                  <button className="btn btn sprite_icon2 add" />
                  <button className="btn sprite_02 favor" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <a href="#/discover/ranking">查看全部 &gt;</a>
      </div>
    </RankingItemWrapper>
  );
};

export default memo(TopRankingItem);
