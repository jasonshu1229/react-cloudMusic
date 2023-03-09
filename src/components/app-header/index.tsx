import React, { memo, FC } from 'react';
import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import { HeaderLeft, HeaderRight, HeaderWrapper } from './style';
import headerTitles from '@/assets/data/header-titles.json';

interface IProps {
  children?: ReactNode;
}

const AppHeader: FC<IProps> = () => {
  function showNavTitle(item: any) {
    if (item.type === 'path') {
      return (
        <NavLink
          to={item.link}
          className={({ isActive }) => {
            return isActive ? 'sh_active' : undefined;
          }}
        >
          {item.title}
          <i className="icon sprite_01" />
        </NavLink>
      );
    } else {
      return (
        <a href={item.link} target="_target">
          {item.title}
        </a>
      );
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="title-list">
            {headerTitles.map((item) => (
              <div className="item" key={item.title}>
                {showNavTitle(item)}
              </div>
            ))}
          </div>
        </HeaderLeft>
        <HeaderRight></HeaderRight>
      </div>
      <div className="divider" />
    </HeaderWrapper>
  );
};

export default memo(AppHeader);
