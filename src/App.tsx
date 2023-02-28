import React from 'react';

function App(props: any) {
  const render = () => {
    const reactElement = <div>app</div>;
    return reactElement;
  };

  return <div className="App">{render()}</div>;
}

export default App;
