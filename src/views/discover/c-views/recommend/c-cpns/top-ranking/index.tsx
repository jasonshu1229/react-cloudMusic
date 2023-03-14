import React, { memo, FC } from 'react';
import type { ReactNode } from 'react';

import { RankingWrapper } from './style';
import AreaHeaderV1 from '@/components/area-header-v1';
import { shallowAppEqual, useAppSelector } from '@/store/hooks';

import TopRankingItem from '../top-ranking-item/index';

interface IProps {
  children?: ReactNode;
}

const TopRanking: FC<IProps> = () => {
  const { rankList = [] } = useAppSelector(
    (state) => ({
      rankList: state.recommend.rankList
    }),
    shallowAppEqual
  );

  return (
    <RankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
      <div className="content">
        {rankList.map((item) => (
          <TopRankingItem itemData={item} key={item.id} />
        ))}
      </div>
    </RankingWrapper>
  );
};

export default memo(TopRanking);
