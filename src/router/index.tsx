import React, { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

const Discover = lazy(() => import('@/views/discover'));
const Recommend = lazy(() => import('@/views/discover/c-views/recommend'));
const Ranking = lazy(() => import('@/views/discover/c-views/ranking'));
const Songs = lazy(() => import('@/views/discover/c-views/songs'));
const Djradio = lazy(() => import('@/views/discover/c-views/djradio'));
const Artist = lazy(() => import('@/views/discover/c-views/artist'));
const Album = lazy(() => import('@/views/discover/c-views/album'));

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
    element: <Discover />,
    children: [
      {
        path: '/discover/',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/album',
        element: <Album />
      }
    ]
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
