import React, { memo, FC } from 'react';
import type { ReactNode } from 'react';

import { SingerWrapper } from './style';
import AreaHeaderV2 from '@/components/area-header-v2/index';
import { shallowAppEqual, useAppSelector } from '@/store/hooks';
import { formatImgUrlSize } from '@/utils/format';

interface IProps {
  children?: ReactNode;
}

const SettleSinger: FC<IProps> = () => {
  const { settleSingers } = useAppSelector(
    (state) => ({
      settleSingers: state.recommend.artistList
    }),
    shallowAppEqual
  );

  return (
    <SingerWrapper>
      <AreaHeaderV2
        title="入驻歌手"
        moreText="查看全部 &gt;"
        moreLink="#/discover/artist"
      />
      <div className="artists">
        {settleSingers.slice(0, 5).map((item) => (
          <a href="#/discover/artists" className="item" key={item.id}>
            <img src={formatImgUrlSize(item.picUrl, 80)} />
            <div className="info">
              <div className="name">{item.name}</div>
              <div className="alia">{item.alias.join(' ')}</div>
            </div>
          </a>
        ))}
      </div>
      <div className="apply-for">
        <a href="#/">申请成为网易音乐人</a>
      </div>
    </SingerWrapper>
  );
};

export default memo(SettleSinger);
