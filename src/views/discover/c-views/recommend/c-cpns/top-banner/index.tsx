import React, { memo, FC, useRef, ElementRef, useState } from 'react';
import type { ReactNode } from 'react';

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style';
import { shallowAppEqual, useAppSelector } from '@/store/hooks';
import { Carousel } from 'antd';
import classNames from 'classnames';

interface IProps {
  children?: ReactNode;
}

const TopBanner: FC<IProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
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

  const handleOnMouseEnter = () => {
    setIsAutoPlay(false);
  };

  const handleOnMouseLeave = () => {
    setIsAutoPlay(true);
  };

  const handleDotsClick = (slideNumber: number, dontAnimate: boolean) => {
    bannerRef.current?.goTo(slideNumber, dontAnimate);
  };

  const handleAfterChange = (current: number) => {
    setCurrentIndex(current);
  };

  let bgImgUrl;
  if (banners.length > 0 && currentIndex >= 0) {
    bgImgUrl = banners[currentIndex].imageUrl + '?imageView&blur=40x20';
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
            autoplay={isAutoPlay}
            autoplaySpeed={3000}
            speed={300}
            dots={false}
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
          <ul className="dots">
            {banners.map((item, index) => (
              <li
                key={item.imageUrl}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
                onClick={() => handleDotsClick(index, false)}
              >
                <span
                  className={classNames('item', {
                    active: index === currentIndex
                  })}
                />
              </li>
            ))}
          </ul>
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
