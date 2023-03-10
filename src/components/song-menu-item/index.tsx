import React, { memo, FC } from 'react';
import type { ReactNode } from 'react';

import { MenuItemWrapper } from './style';

interface IItemData {
  id: number;
  name: string;
  picUrl: string;
  playCount: number;
}

interface IProps {
  children?: ReactNode;
  itemData: IItemData;
}

const SongMenuItem: FC<IProps> = (props) => {
  const { itemData } = props;

  return (
    <MenuItemWrapper>
      <div className="top">
        <img src={itemData.picUrl} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset" />
              <span className="count">{itemData.playCount}</span>
            </span>
            <i className="sprite_icon play" />
          </div>
        </div>
      </div>
      <div className="bottom">{itemData.name}</div>
    </MenuItemWrapper>
  );
};

export default memo(SongMenuItem);
