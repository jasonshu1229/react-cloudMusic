import React, { memo, FC } from 'react';
import type { ReactNode } from 'react';

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style';
import { shallowAppEqual, useAppSelector } from '@/store/hooks';
import { Carousel } from 'antd';

interface IProps {
  children?: ReactNode;
}

const TopBanner: FC<IProps> = () => {
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowAppEqual
  );

  return (
    <BannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel autoplay autoplaySpeed={3000}>
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
          <button className="btn left"></button>
          <button className="btn right"></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
};

export default memo(TopBanner);
