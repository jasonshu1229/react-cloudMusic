import React, { memo, FC } from 'react';
import type { ReactNode } from 'react';

import { AnchorWrapper } from './style';
import AreaHeaderV2 from '@/components/area-header-v2';

import { hotRadios } from '@/assets/data/local_data';

interface IProps {
  children?: ReactNode;
}

const HotAnchor: FC<IProps> = () => {
  return (
    <AnchorWrapper>
      <AreaHeaderV2 title="热门主题" />
      <div className="anchors">
        {hotRadios.map((item) => (
          <div className="item" key={item.picUrl}>
            <a href="" className="image">
              <img src={item.picUrl} />
            </a>
            <div className="info">
              <div className="item">{item.name}</div>
              <div className="postion">{item.position}</div>
            </div>
          </div>
        ))}
      </div>
    </AnchorWrapper>
  );
};

export default memo(HotAnchor);
