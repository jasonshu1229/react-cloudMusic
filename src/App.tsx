import React from 'react';
import routes from './router';
import { useRoutes } from 'react-router-dom';

function App() {
  return <div className="App">{useRoutes(routes)}</div>;
}

export default App;
