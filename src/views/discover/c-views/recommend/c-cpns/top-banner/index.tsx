import React, { memo, FC, useRef, ElementRef, useState } from 'react';
import type { ReactNode } from 'react';

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style';
import { shallowAppEqual, useAppSelector } from '@/store/hooks';
import { Carousel } from 'antd';

interface IProps {
  children?: ReactNode;
}

const TopBanner: FC<IProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const handleAfterChange = (current: number) => {
    setCurrentIndex(current);
  };

  let bgImgUrl;
  if (banners.length > 0 && currentIndex >= 0) {
    bgImgUrl = banners[currentIndex]?.imageUrl + '?imageView&blur=40x20';
  }

  return (
    <BannerWrapper
      style={{
        background: `url(${bgImgUrl}) center center / 6000px`
      }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            autoplaySpeed={3000}
            effect="fade"
            ref={bannerRef}
            afterChange={handleAfterChange}
          >
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
