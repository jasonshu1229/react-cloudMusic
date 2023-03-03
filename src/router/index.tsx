import React, { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

// import Discover from '@/views/discover';
// import Download from '@/views/download';
// import Focus from '@/views/focus';
// import Mine from '@/views/mine';

const Discover = lazy(() => import('@/views/discover'));
const Download = lazy(() => import('@/views/download'));
const Focus = lazy(() => import('@/views/focus'));
const Mine = lazy(() => import('@/views/mine'));

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
