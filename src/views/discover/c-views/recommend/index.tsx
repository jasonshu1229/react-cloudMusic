import { useAppDispatch } from '@/store/hooks';
import React, { memo, FC, useEffect } from 'react';
import type { ReactNode } from 'react';

import { RecommendWrapper } from './style';
import {
  fetchHotRecommendDataAction,
  fetchRecommendDataAction
} from './store/recommend';
import TopBanner from './c-cpns/top-banner';
import HotRecommend from './c-cpns/hot-recommend';

interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = () => {
  // 发起action获取数据
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchRecommendDataAction());
    dispatch(fetchHotRecommendDataAction());
  }, []);

  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
        </div>
        <div className="right">right</div>
      </div>
    </RecommendWrapper>
  );
};

export default memo(Recommend);
