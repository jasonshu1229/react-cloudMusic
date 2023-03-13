import { useAppDispatch } from '@/store/hooks';
import React, { memo, FC, useEffect } from 'react';
import type { ReactNode } from 'react';

import { RecommendWrapper } from './style';
import {
  fetchRecommendDataAction,
  fetchRankingListDataAction
} from './store/recommend';
import TopBanner from './c-cpns/top-banner';
import HotRecommend from './c-cpns/hot-recommend';
import NewAlbum from './c-cpns/new-album';
import TopRanking from './c-cpns/top-ranking';
import UserLogin from './c-cpns/user-login';
import SettleSinger from './c-cpns/settle-singer';
import HotAnchor from './c-cpns/hot-anchor';

interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = () => {
  // 发起action获取数据
  const dispatch = useAppDispatch();
  useEffect(() => {
    // dispatch(fetchRecommendDataAction());
    // dispatch(fetchHotRecommendDataAction());
    // dispatch(fetchNewAblbumAction());
    dispatch(fetchRecommendDataAction());
    dispatch(fetchRankingListDataAction());
  }, []);

  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </div>
        <div className="right">
          <UserLogin />
          <SettleSinger />
          <HotAnchor />
        </div>
      </div>
    </RecommendWrapper>
  );
};

export default memo(Recommend);
