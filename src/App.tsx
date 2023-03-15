import React, { Suspense, useEffect } from 'react';
import routes from './router';
import { useRoutes } from 'react-router-dom';

import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import AppPlayerBar from './views/play/app-player-bar';
import { useAppDispatch } from './store/hooks';
import { fetchCurrentSongAction } from './views/play/store/player';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrentSongAction(35678875));
  }, []);

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
