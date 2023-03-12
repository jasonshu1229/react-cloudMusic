import { formatImgUrlSize } from '@/utils/format';
import React, { memo, FC } from 'react';
import type { ReactNode } from 'react';

import { AlbumWrapper } from './style';

interface IItemData {
  id: number;
  name: string;
  picUrl: string;
  artist: any;
}

interface IProps {
  children?: ReactNode;
  itemData: IItemData;
}

const NewAlbumItem: FC<IProps> = (props) => {
  const { itemData } = props;
  return (
    <AlbumWrapper>
      <div className="top">
        <img src={formatImgUrlSize(itemData.picUrl, 100)} />
        <a href="" className="cover sprite_cover" />
      </div>
      <div className="bottom">
        <div className="name">{itemData.name}</div>
        <div className="artist">{itemData.artist.name}</div>
      </div>
    </AlbumWrapper>
  );
};

export default memo(NewAlbumItem);
