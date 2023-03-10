import React, { memo, FC } from 'react';
import type { ReactNode } from 'react';

import { RecommendWrapper } from './style';
import AreaHeaderV1 from '@/components/area-header-v1';

interface IProps {
  children?: ReactNode;
}

const HotRecommend: FC<IProps> = () => {
  return (
    <RecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣']}
        moreText="更多"
        moreLink="/discover/songs"
      />
    </RecommendWrapper>
  );
};

export default memo(HotRecommend);
