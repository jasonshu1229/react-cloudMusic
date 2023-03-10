import React, { memo, FC } from 'react';
import type { ReactNode } from 'react';

import { discoverMenu } from '@/assets/data/local_data';
import { NavWrapper } from './style';
import { NavLink } from 'react-router-dom';

interface IProps {
  children?: ReactNode;
}

const NavBar: FC<IProps> = () => {
  return (
    <NavWrapper>
      <div className="nav wrap-v1">
        {discoverMenu.map((item) => (
          <div className="item" key={item.title}>
            <NavLink
              to={item.link}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {item.title}
            </NavLink>
          </div>
        ))}
      </div>
    </NavWrapper>
  );
};

export default memo(NavBar);
