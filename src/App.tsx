import React from 'react';
import routes from './router';
import { useRoutes } from 'react-router-dom';
import Download from './views/download';

function App() {
  return (
    <div className="App">
      {useRoutes(routes)}
      <Download name="lsh" age={18}>
        <div>123</div>
        <div>234</div>
        <p>text</p>
      </Download>
    </div>
  );
}

export default App;
