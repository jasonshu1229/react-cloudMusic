import React, { memo, FC } from 'react';
import type { ReactNode } from 'react';

import { RecommendWrapper } from './style';
import AreaHeaderV1 from '@/components/area-header-v1';
import { shallowAppEqual, useAppSelector } from '@/store/hooks';
import SongMenuItem from '@/components/song-menu-item';

interface IProps {
  children?: ReactNode;
}

const HotRecommend: FC<IProps> = () => {
  const { hotRecommendSongList } = useAppSelector(
    (state) => ({
      hotRecommendSongList: state.recommend.hotRecommendSongList
    }),
    shallowAppEqual
  );

  return (
    <RecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣']}
        moreText="更多"
        moreLink="/discover/songs"
      />
      <div className="recommend-list">
        {hotRecommendSongList.map((item) => (
          <SongMenuItem itemData={item} key={item.id} />
        ))}
      </div>
    </RecommendWrapper>
  );
};

export default memo(HotRecommend);
