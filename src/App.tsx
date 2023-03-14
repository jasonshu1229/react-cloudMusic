import React, { Suspense } from 'react';
import routes from './router';
import { useRoutes } from 'react-router-dom';

import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import AppPlayerBar from './views/play/app-player-bar';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />

      <AppPlayerBar />
    </div>
  );
}

export default App;
