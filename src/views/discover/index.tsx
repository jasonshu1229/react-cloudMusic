import React, { memo, FC, Suspense } from 'react';
import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from './c-cpns/nav-bar';

interface IProps {
  children?: ReactNode;
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <NavBar />
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  );
};

export default memo(Discover);
