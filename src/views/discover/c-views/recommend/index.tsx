import hyRequest from '@/service';
import React, { memo, FC, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

interface IBannerListData {
  imageUrl: string;
  targetId: number;
  adid: any;
  targetType: number;
  titleColor: string;
  typeTitle: string;
  url: string;
}

const Recommend: FC<IProps> = () => {
  const [bannerList, setBannerList] = useState<IBannerListData[]>([]);

  useEffect(() => {
    hyRequest
      .get({
        url: '/banner'
      })
      .then((res) => {
        console.log(res);
        setBannerList(res.banners);
      });
  }, []);

  return <div>Recommend</div>;
};

export default memo(Recommend);
