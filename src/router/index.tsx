import React from 'react';
import { RouteObject } from 'react-router-dom';

import Discover from '@/views/discover';

const routes: RouteObject[] = [
  {
    path: '/discover',
    element: <Discover />
  }
];

export default routes;
