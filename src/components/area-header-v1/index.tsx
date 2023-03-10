import React, { FC, memo } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { HeaderV1Wrapper } from './style';

interface IProps {
  children?: ReactNode;
}

const AreaHeaderV1: FC<IProps> = (props) => {
  return (
    <HeaderV1Wrapper className="sprite_02">
      <div className="left">
        <h3 className="title">热门推荐</h3>
        <div className="keywords">
          {['华语', '流行', '摇滚', '民谣'].map((item) => (
            <div className="item" key={item}>
              <span className="link">{item}</span>
              <span className="divider">|</span>
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <Link className="more" to="/">
          更多
        </Link>
        <i className="sprite_02 icon" />
      </div>
    </HeaderV1Wrapper>
  );
};

export default memo(AreaHeaderV1);
