import React, { Suspense } from 'react';
import routes from './router';
import { useRoutes } from 'react-router-dom';

import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
    </div>
  );
}

export default App;
