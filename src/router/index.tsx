import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

import Discover from '@/views/discover';
import Download from '@/views/download';
import Focus from '@/views/focus';
import Mine from '@/views/mine';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/mine',
    element: <Mine />
  }
];

export default routes;
