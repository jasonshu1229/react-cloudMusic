import { useAppDispatch } from '@/store/hooks';
import React, { memo, FC, useEffect } from 'react';
import type { ReactNode } from 'react';

import { fetchRecommendDataAction } from './store/recommend';
import TopBanner from './c-cpns/top-banner';

interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = () => {
  // 发起action获取数据
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchRecommendDataAction());
  }, []);

  return (
    <div>
      <TopBanner />
    </div>
  );
};

export default memo(Recommend);
