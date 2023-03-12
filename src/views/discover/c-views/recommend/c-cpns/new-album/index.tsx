import React, { memo, FC, useRef, ElementRef } from 'react';
import type { ReactNode } from 'react';

import { Carousel } from 'antd';

import { AlbumWrapper } from './style';
import AreaHeaderV1 from '@/components/area-header-v1';

import NewAlbumItem from '@/components/new-album-item';
import { useAppSelector } from '@/store/hooks';

interface IProps {
  children?: ReactNode;
}

const NewAlbum: FC<IProps> = (props) => {
  const newAlbumBannerRef = useRef<ElementRef<typeof Carousel>>(null);

  const { newAlbums } = useAppSelector((state) => ({
    newAlbums: state.recommend.newAlbumList
  }));

  const handleControlClick = (state: string) => {
    if (state === 'prev') {
      newAlbumBannerRef.current?.prev();
    } else {
      newAlbumBannerRef.current?.next();
    }
  };

  return (
    <AlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={() => handleControlClick('prev')}
        />
        <div className="banner">
          <Carousel ref={newAlbumBannerRef} dots={false}>
            {[0, 1].map((item) => (
              <div key={item}>
                <div className="album-list">
                  {newAlbums
                    .slice(item * 5, (item + 1) * 5)
                    .map((albumItem) => {
                      return (
                        <NewAlbumItem itemData={albumItem} key={albumItem.id} />
                      );
                    })}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <button
          className="sprite_02 arrow arrow-right"
          onClick={() => handleControlClick('next')}
        ></button>
      </div>
    </AlbumWrapper>
  );
};

export default memo(NewAlbum);
