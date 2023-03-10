import React, { memo, FC, useRef, ElementRef } from 'react';
import type { ReactNode } from 'react';

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style';
import { shallowAppEqual, useAppSelector } from '@/store/hooks';
import { Carousel } from 'antd';

interface IProps {
  children?: ReactNode;
}

const TopBanner: FC<IProps> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);

  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowAppEqual
  );

  const handleClick = (state: string) => {
    if (state === 'prev') {
      bannerRef.current?.prev();
    } else {
      bannerRef.current?.next();
    }
  };

  return (
    <BannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel autoplay autoplaySpeed={3000} ref={bannerRef}>
            {banners.map((item) => (
              <div className="banner-item" key={item.imageUrl}>
                <img
                  className="image"
                  src={item.imageUrl}
                  alt={item.typeTitle}
                />
              </div>
            ))}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={() => handleClick('prev')}
          ></button>
          <button
            className="btn right"
            onClick={() => handleClick('next')}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
};

export default memo(TopBanner);
